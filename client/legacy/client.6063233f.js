function noop() {}

const identity = x => x;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);

  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

const is_client = typeof window !== 'undefined';
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      let j = 0;
      const remove = [];

      while (j < node.attributes.length) {
        const attribute = node.attributes[j++];

        if (!attributes[attribute.name]) {
          remove.push(attribute.name);
        }
      }

      for (let k = 0; k < remove.length; k++) {
        node.removeAttribute(remove[k]);
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}

class HtmlTag {
  constructor(anchor = null) {
    this.a = anchor;
    this.e = this.n = null;
  }

  m(html, target, anchor = null) {
    if (!this.e) {
      this.e = element(target.nodeName);
      this.t = target;
      this.h(html);
    }

    this.i(anchor);
  }

  h(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(this.t, this.n[i], anchor);
    }
  }

  p(html) {
    this.d();
    this.h(html);
    this.i(this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

const active_docs = new Set();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = node.ownerDocument;
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    active_docs.forEach(doc => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

let current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

const globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }

}

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.29.0'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

  $capture_state() {}

  $inject_state() {}

}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value, start = noop) {
  let stop;
  const subscribers = [];

  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;

        for (let i = 0; i < subscribers.length; i += 1) {
          const s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }

    run(value);
    return () => {
      const index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set,
    update,
    subscribe
  };
}

const CONTEXT_KEY = {};

/* src/components/DownloadBox.svelte generated by Svelte v3.29.0 */
const file = "src/components/DownloadBox.svelte"; // (21:11) download

function fallback_block(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("download");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "download");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(21:11) download",
    ctx
  });
  return block;
} // (23:2) {#if openDownloadList}


function create_if_block(ctx) {
  let ul;
  let li0;
  let t0;
  let em;
  let t1;
  let t2;
  let t3;
  let li1;
  let a0;
  let t4;
  let t5;
  let li2;
  let a1;
  let t6;
  let t7;
  let li3;
  let a2;
  let t8;
  const block = {
    c: function create() {
      ul = element("ul");
      li0 = element("li");
      t0 = text("All links will take you to my ");
      em = element("em");
      t1 = text("Payhip");
      t2 = text(" store, where you can download\n        the book");
      t3 = space();
      li1 = element("li");
      a0 = element("a");
      t4 = text("Book One");
      t5 = space();
      li2 = element("li");
      a1 = element("a");
      t6 = text("Book Two");
      t7 = space();
      li3 = element("li");
      a2 = element("a");
      t8 = text("Book Three");
      this.h();
    },
    l: function claim(nodes) {
      ul = claim_element(nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li0_nodes = children(li0);
      t0 = claim_text(li0_nodes, "All links will take you to my ");
      em = claim_element(li0_nodes, "EM", {});
      var em_nodes = children(em);
      t1 = claim_text(em_nodes, "Payhip");
      em_nodes.forEach(detach_dev);
      t2 = claim_text(li0_nodes, " store, where you can download\n        the book");
      li0_nodes.forEach(detach_dev);
      t3 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li1_nodes = children(li1);
      a0 = claim_element(li1_nodes, "A", {
        class: true,
        target: true,
        rel: true,
        href: true
      });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "Book One");
      a0_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t5 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li2_nodes = children(li2);
      a1 = claim_element(li2_nodes, "A", {
        class: true,
        target: true,
        rel: true,
        href: true
      });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "Book Two");
      a1_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t7 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li3_nodes = children(li3);
      a2 = claim_element(li3_nodes, "A", {
        class: true,
        target: true,
        rel: true,
        href: true
      });
      var a2_nodes = children(a2);
      t8 = claim_text(a2_nodes, "Book Three");
      a2_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(em, file, 27, 38, 682);
      attr_dev(li0, "class", "text-xs p-2 text-gray-500");
      add_location(li0, file, 26, 6, 605);
      attr_dev(a0, "class", "no-underline w-full block p-2");
      attr_dev(a0, "target", "_blank");
      attr_dev(a0, "rel", "nofollow");
      attr_dev(a0, "href", "https://payhip.com/b/UjTb1");
      add_location(a0, file, 31, 8, 807);
      attr_dev(li1, "class", "p-2 hover:bg-oblivious");
      add_location(li1, file, 30, 6, 763);
      attr_dev(a1, "class", "no-underline w-full block p-2");
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "rel", "nofollow");
      attr_dev(a1, "href", "https://payhip.com/b/V1kCi");
      add_location(a1, file, 39, 8, 1037);
      attr_dev(li2, "class", "p-2 hover:bg-oblivious");
      add_location(li2, file, 38, 6, 993);
      attr_dev(a2, "class", "no-underline w-full block p-2");
      attr_dev(a2, "target", "_blank");
      attr_dev(a2, "rel", "nofollow");
      attr_dev(a2, "href", "https://payhip.com/b/T4XRt");
      add_location(a2, file, 47, 8, 1267);
      attr_dev(li3, "class", "p-2 hover:bg-oblivious");
      add_location(li3, file, 46, 6, 1223);
      attr_dev(ul, "class", "absolute left-1/2 transform -translate-x-1/2 top-full rounded-md w-60 bg-white shadow-lg border-2 border-oblivious z-50");
      add_location(ul, file, 23, 4, 455);
    },
    m: function mount(target, anchor) {
      insert_dev(target, ul, anchor);
      append_dev(ul, li0);
      append_dev(li0, t0);
      append_dev(li0, em);
      append_dev(em, t1);
      append_dev(li0, t2);
      append_dev(ul, t3);
      append_dev(ul, li1);
      append_dev(li1, a0);
      append_dev(a0, t4);
      append_dev(ul, t5);
      append_dev(ul, li2);
      append_dev(li2, a1);
      append_dev(a1, t6);
      append_dev(ul, t7);
      append_dev(ul, li3);
      append_dev(li3, a2);
      append_dev(a2, t8);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(ul);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(23:2) {#if openDownloadList}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let div;
  let span;
  let t;
  let current;
  let mounted;
  let dispose;
  const default_slot_template =
  /*#slots*/
  ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  let if_block =
  /*openDownloadList*/
  ctx[0] && create_if_block(ctx);
  const block = {
    c: function create() {
      div = element("div");
      span = element("span");
      if (default_slot_or_fallback) default_slot_or_fallback.c();
      t = space();
      if (if_block) if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        tabindex: true
      });
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      if (default_slot_or_fallback) default_slot_or_fallback.l(span_nodes);
      span_nodes.forEach(detach_dev);
      t = claim_space(div_nodes);
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "cursor-pointer");
      add_location(span, file, 19, 2, 329);
      attr_dev(div, "class", "relative");
      attr_dev(div, "tabindex", "0");
      add_location(div, file, 9, 0, 168);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, span);

      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(span, null);
      }

      append_dev(div, t);
      if (if_block) if_block.m(div, null);
      /*div_binding*/

      ctx[5](div);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(span, "click",
        /*handleDownloadClick*/
        ctx[2], false, false, false), listen_dev(div, "blur",
        /*blur_handler*/
        ctx[6], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        8) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, null, null);
        }
      }

      if (
      /*openDownloadList*/
      ctx[0]) {
        if (if_block) ; else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
      if (if_block) if_block.d();
      /*div_binding*/

      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  validate_slots("DownloadBox", slots, ['default']);
  let openDownloadList = false;
  let downloadBox;

  const handleDownloadClick = () => {
    $$invalidate(0, openDownloadList = true);
    downloadBox.focus();
  };

  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DownloadBox> was created with unknown prop '${key}'`);
  });

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      downloadBox = $$value;
      $$invalidate(1, downloadBox);
    });
  }

  const blur_handler = () => {
    setTimeout(() => {
      $$invalidate(0, openDownloadList = false);
    }, 300);
  };

  $$self.$$set = $$props => {
    if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    openDownloadList,
    downloadBox,
    handleDownloadClick
  });

  $$self.$inject_state = $$props => {
    if ("openDownloadList" in $$props) $$invalidate(0, openDownloadList = $$props.openDownloadList);
    if ("downloadBox" in $$props) $$invalidate(1, downloadBox = $$props.downloadBox);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [openDownloadList, downloadBox, handleDownloadClick, $$scope, slots, div_binding, blur_handler];
}

class DownloadBox extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "DownloadBox",
      options,
      id: create_fragment.name
    });
  }

}

/* src/components/Nav.svelte generated by Svelte v3.29.0 */
const file$1 = "src/components/Nav.svelte"; // (35:8) <DownloadBox>

function create_default_slot(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("download");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "download");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(35:8) <DownloadBox>",
    ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  let div;
  let nav;
  let a0;
  let img;
  let img_src_value;
  let t0;
  let ul;
  let li0;
  let a1;
  let t1;
  let a1_aria_current_value;
  let t2;
  let li1;
  let a2;
  let t3;
  let a2_aria_current_value;
  let t4;
  let li2;
  let downloadbox;
  let t5;
  let li3;
  let a3;
  let t6;
  let a3_aria_current_value;
  let current;
  downloadbox = new DownloadBox({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      nav = element("nav");
      a0 = element("a");
      img = element("img");
      t0 = space();
      ul = element("ul");
      li0 = element("li");
      a1 = element("a");
      t1 = text("home");
      t2 = space();
      li1 = element("li");
      a2 = element("a");
      t3 = text("about");
      t4 = space();
      li2 = element("li");
      create_component(downloadbox.$$.fragment);
      t5 = space();
      li3 = element("li");
      a3 = element("a");
      t6 = text("read it now");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      nav = claim_element(div_nodes, "NAV", {
        class: true
      });
      var nav_nodes = children(nav);
      a0 = claim_element(nav_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", {
        src: true,
        alt: true
      });
      a0_nodes.forEach(detach_dev);
      t0 = claim_space(nav_nodes);
      ul = claim_element(nav_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li0_nodes = children(li0);
      a1 = claim_element(li0_nodes, "A", {
        class: true,
        "aria-current": true,
        href: true
      });
      var a1_nodes = children(a1);
      t1 = claim_text(a1_nodes, "home");
      a1_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t2 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li1_nodes = children(li1);
      a2 = claim_element(li1_nodes, "A", {
        class: true,
        rel: true,
        "aria-current": true,
        href: true
      });
      var a2_nodes = children(a2);
      t3 = claim_text(a2_nodes, "about");
      a2_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t4 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li2_nodes = children(li2);
      claim_component(downloadbox.$$.fragment, li2_nodes);
      li2_nodes.forEach(detach_dev);
      t5 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", {
        class: true,
        href: true,
        "aria-current": true,
        rel: true
      });
      var a3_nodes = children(a3);
      t6 = claim_text(a3_nodes, "read it now");
      a3_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      nav_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "/images/logo-150.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Oblivious logo of motorbike in an outline of Africa");
      add_location(img, file$1, 10, 6, 253);
      attr_dev(a0, "href", "/");
      add_location(a0, file$1, 9, 4, 234);
      attr_dev(a1, "class", "no-underline p-2 svelte-1f58i45");
      attr_dev(a1, "aria-current", a1_aria_current_value =
      /*segment*/
      ctx[0] === undefined ? "page" : undefined);
      attr_dev(a1, "href", ".");
      add_location(a1, file$1, 19, 8, 514);
      attr_dev(li0, "class", "block p-1 sm:p-4");
      add_location(li0, file$1, 18, 6, 476);
      attr_dev(a2, "class", "no-underline p-2 svelte-1f58i45");
      attr_dev(a2, "rel", "prefetch");
      attr_dev(a2, "aria-current", a2_aria_current_value =
      /*segment*/
      ctx[0] === "about" ? "page" : undefined);
      attr_dev(a2, "href", "about");
      add_location(a2, file$1, 26, 8, 713);
      attr_dev(li1, "class", "block p-1 sm:p-4");
      add_location(li1, file$1, 25, 6, 675);
      attr_dev(li2, "class", "block p-1 sm:p-4");
      add_location(li2, file$1, 33, 6, 902);
      attr_dev(a3, "class", "p-2 md:p-4 rounded-lg no-underline bg-oblivious svelte-1f58i45");
      attr_dev(a3, "href", "read");
      attr_dev(a3, "aria-current", a3_aria_current_value =
      /*segment*/
      ctx[0] === "read" ? "page" : undefined);
      attr_dev(a3, "rel", "nofollow");
      add_location(a3, file$1, 37, 8, 1037);
      attr_dev(li3, "class", "block p-1 sm:p-4 my-2");
      add_location(li3, file$1, 36, 6, 994);
      attr_dev(ul, "class", "flex flex-col md:flex-row text-base md:text-xl items-center ml-4");
      add_location(ul, file$1, 15, 4, 381);
      attr_dev(nav, "class", "flex flex-row justify-between md:justify-start items-center p-4 max-w-4xl w-full");
      add_location(nav, file$1, 6, 2, 128);
      attr_dev(div, "class", "flex justify-center");
      add_location(div, file$1, 5, 0, 92);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, nav);
      append_dev(nav, a0);
      append_dev(a0, img);
      append_dev(nav, t0);
      append_dev(nav, ul);
      append_dev(ul, li0);
      append_dev(li0, a1);
      append_dev(a1, t1);
      append_dev(ul, t2);
      append_dev(ul, li1);
      append_dev(li1, a2);
      append_dev(a2, t3);
      append_dev(ul, t4);
      append_dev(ul, li2);
      mount_component(downloadbox, li2, null);
      append_dev(ul, t5);
      append_dev(ul, li3);
      append_dev(li3, a3);
      append_dev(a3, t6);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (!current || dirty &
      /*segment*/
      1 && a1_aria_current_value !== (a1_aria_current_value =
      /*segment*/
      ctx[0] === undefined ? "page" : undefined)) {
        attr_dev(a1, "aria-current", a1_aria_current_value);
      }

      if (!current || dirty &
      /*segment*/
      1 && a2_aria_current_value !== (a2_aria_current_value =
      /*segment*/
      ctx[0] === "about" ? "page" : undefined)) {
        attr_dev(a2, "aria-current", a2_aria_current_value);
      }

      const downloadbox_changes = {};

      if (dirty &
      /*$$scope*/
      2) {
        downloadbox_changes.$$scope = {
          dirty,
          ctx
        };
      }

      downloadbox.$set(downloadbox_changes);

      if (!current || dirty &
      /*segment*/
      1 && a3_aria_current_value !== (a3_aria_current_value =
      /*segment*/
      ctx[0] === "read" ? "page" : undefined)) {
        attr_dev(a3, "aria-current", a3_aria_current_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(downloadbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(downloadbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(downloadbox);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  validate_slots("Nav", slots, []);
  let {
    segment
  } = $$props;
  const writable_props = ["segment"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Nav> was created with unknown prop '${key}'`);
  });

  $$self.$$set = $$props => {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  $$self.$capture_state = () => ({
    segment,
    DownloadBox
  });

  $$self.$inject_state = $$props => {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [segment];
}

class Nav extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      segment: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Nav",
      options,
      id: create_fragment$1.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<Nav> was created without expected prop 'segment'");
    }
  }

  get segment() {
    throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set segment(value) {
    throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

/* src/components/Footer.svelte generated by Svelte v3.29.0 */
const file$2 = "src/components/Footer.svelte"; // (57:8) <DownloadBox>

function create_default_slot$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("download");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "download");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(57:8) <DownloadBox>",
    ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  let div;
  let a0;
  let t0;
  let t1;
  let nav;
  let a1;
  let img;
  let img_src_value;
  let t2;
  let ul;
  let li0;
  let a2;
  let t3;
  let a2_aria_current_value;
  let t4;
  let li1;
  let a3;
  let t5;
  let a3_aria_current_value;
  let t6;
  let li2;
  let a4;
  let t7;
  let a4_aria_current_value;
  let t8;
  let li3;
  let a5;
  let t9;
  let t10;
  let li4;
  let a6;
  let t11;
  let t12;
  let li5;
  let downloadbox;
  let t13;
  let li6;
  let a7;
  let t14;
  let a7_aria_current_value;
  let t15;
  let span;
  let t16;
  let current;
  downloadbox = new DownloadBox({
    props: {
      $$slots: {
        default: [create_default_slot$1]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      a0 = element("a");
      t0 = text(".");
      t1 = space();
      nav = element("nav");
      a1 = element("a");
      img = element("img");
      t2 = space();
      ul = element("ul");
      li0 = element("li");
      a2 = element("a");
      t3 = text("home");
      t4 = space();
      li1 = element("li");
      a3 = element("a");
      t5 = text("about");
      t6 = space();
      li2 = element("li");
      a4 = element("a");
      t7 = text("get help");
      t8 = space();
      li3 = element("li");
      a5 = element("a");
      t9 = text("get in touch");
      t10 = space();
      li4 = element("li");
      a6 = element("a");
      t11 = text("give");
      t12 = space();
      li5 = element("li");
      create_component(downloadbox.$$.fragment);
      t13 = space();
      li6 = element("li");
      a7 = element("a");
      t14 = text("read it now");
      t15 = space();
      span = element("span");
      t16 = text("© Luke Gelmi 2025");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a0 = claim_element(div_nodes, "A", {
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, ".");
      a0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      nav = claim_element(div_nodes, "NAV", {
        class: true
      });
      var nav_nodes = children(nav);
      a1 = claim_element(nav_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      img = claim_element(a1_nodes, "IMG", {
        src: true,
        alt: true
      });
      a1_nodes.forEach(detach_dev);
      t2 = claim_space(nav_nodes);
      ul = claim_element(nav_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li0_nodes = children(li0);
      a2 = claim_element(li0_nodes, "A", {
        class: true,
        "aria-current": true,
        href: true
      });
      var a2_nodes = children(a2);
      t3 = claim_text(a2_nodes, "home");
      a2_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t4 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li1_nodes = children(li1);
      a3 = claim_element(li1_nodes, "A", {
        class: true,
        rel: true,
        "aria-current": true,
        href: true
      });
      var a3_nodes = children(a3);
      t5 = claim_text(a3_nodes, "about");
      a3_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t6 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li2_nodes = children(li2);
      a4 = claim_element(li2_nodes, "A", {
        class: true,
        rel: true,
        "aria-current": true,
        href: true
      });
      var a4_nodes = children(a4);
      t7 = claim_text(a4_nodes, "get help");
      a4_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t8 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li3_nodes = children(li3);
      a5 = claim_element(li3_nodes, "A", {
        class: true,
        rel: true,
        href: true
      });
      var a5_nodes = children(a5);
      t9 = claim_text(a5_nodes, "get in touch");
      a5_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      t10 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li4_nodes = children(li4);
      a6 = claim_element(li4_nodes, "A", {
        class: true,
        href: true,
        rel: true
      });
      var a6_nodes = children(a6);
      t11 = claim_text(a6_nodes, "give");
      a6_nodes.forEach(detach_dev);
      li4_nodes.forEach(detach_dev);
      t12 = claim_space(ul_nodes);
      li5 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li5_nodes = children(li5);
      claim_component(downloadbox.$$.fragment, li5_nodes);
      li5_nodes.forEach(detach_dev);
      t13 = claim_space(ul_nodes);
      li6 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li6_nodes = children(li6);
      a7 = claim_element(li6_nodes, "A", {
        class: true,
        href: true,
        "aria-current": true,
        rel: true
      });
      var a7_nodes = children(a7);
      t14 = claim_text(a7_nodes, "read it now");
      a7_nodes.forEach(detach_dev);
      li6_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      t15 = claim_space(nav_nodes);
      span = claim_element(nav_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t16 = claim_text(span_nodes, "© Luke Gelmi 2025");
      span_nodes.forEach(detach_dev);
      nav_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a0, "href", "/success");
      attr_dev(a0, "class", "no-underline text-oblivious");
      add_location(a0, file$2, 7, 2, 142);
      if (img.src !== (img_src_value = "/images/logo-150.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Oblivious logo of motorbike in an outline of Africa");
      add_location(img, file$2, 12, 6, 343);
      attr_dev(a1, "href", "/");
      add_location(a1, file$2, 11, 4, 324);
      attr_dev(a2, "class", "no-underline p-2 svelte-144dazj");
      attr_dev(a2, "aria-current", a2_aria_current_value =
      /*segment*/
      ctx[0] === undefined ? "page" : undefined);
      attr_dev(a2, "href", ".");
      add_location(a2, file$2, 19, 8, 566);
      attr_dev(li0, "class", "p-1 sm:p-4");
      add_location(li0, file$2, 18, 6, 534);
      attr_dev(a3, "class", "no-underline p-2 svelte-144dazj");
      attr_dev(a3, "rel", "prefetch");
      attr_dev(a3, "aria-current", a3_aria_current_value =
      /*segment*/
      ctx[0] === "about" ? "page" : undefined);
      attr_dev(a3, "href", "about");
      add_location(a3, file$2, 26, 8, 759);
      attr_dev(li1, "class", "p-1 sm:p-4");
      add_location(li1, file$2, 25, 6, 727);
      attr_dev(a4, "class", "no-underline p-2 svelte-144dazj");
      attr_dev(a4, "rel", "prefetch");
      attr_dev(a4, "aria-current", a4_aria_current_value =
      /*segment*/
      ctx[0] === "help" ? "page" : undefined);
      attr_dev(a4, "href", "help");
      add_location(a4, file$2, 34, 8, 980);
      attr_dev(li2, "class", "p-1 sm:p-4");
      add_location(li2, file$2, 33, 6, 948);
      attr_dev(a5, "class", "no-underline p-2");
      attr_dev(a5, "rel", "prefetch");
      attr_dev(a5, "href", "mailto:hello@obliviousthebook.com");
      add_location(a5, file$2, 42, 8, 1202);
      attr_dev(li3, "class", "p-1 sm:p-4");
      add_location(li3, file$2, 41, 6, 1170);
      attr_dev(a6, "class", "no-underline p-2");
      attr_dev(a6, "href", "https://payhip.com/b/5eyXH");
      attr_dev(a6, "rel", "nofollow");
      add_location(a6, file$2, 49, 8, 1392);
      attr_dev(li4, "class", "p-1 sm:p-4");
      add_location(li4, file$2, 48, 6, 1360);
      attr_dev(li5, "class", "p-1 sm:p-4");
      add_location(li5, file$2, 55, 6, 1535);
      attr_dev(a7, "class", "p-2 md:p-4 rounded-lg no-underline bg-white svelte-144dazj");
      attr_dev(a7, "href", "read");
      attr_dev(a7, "aria-current", a7_aria_current_value =
      /*segment*/
      ctx[0] === "read" ? "page" : undefined);
      attr_dev(a7, "rel", "prefetch");
      add_location(a7, file$2, 59, 8, 1653);
      attr_dev(li6, "class", "p-1 sm:p-4");
      add_location(li6, file$2, 58, 6, 1621);
      attr_dev(ul, "class", "flex flex-col lg:flex-row items-center ml-4");
      add_location(ul, file$2, 17, 4, 471);
      attr_dev(span, "class", "absolute bottom-0 left-0 md:left-1/2 transform md:-translate-x-1/2 mb-2 text-sm");
      add_location(span, file$2, 67, 4, 1881);
      attr_dev(nav, "class", "relative z-0 flex flex-row justify-between lg:justify-start items-center p-4 max-w-5xl w-full");
      add_location(nav, file$2, 8, 2, 205);
      attr_dev(div, "class", "flex justify-center bg-oblivious");
      add_location(div, file$2, 6, 0, 93);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, a0);
      append_dev(a0, t0);
      append_dev(div, t1);
      append_dev(div, nav);
      append_dev(nav, a1);
      append_dev(a1, img);
      append_dev(nav, t2);
      append_dev(nav, ul);
      append_dev(ul, li0);
      append_dev(li0, a2);
      append_dev(a2, t3);
      append_dev(ul, t4);
      append_dev(ul, li1);
      append_dev(li1, a3);
      append_dev(a3, t5);
      append_dev(ul, t6);
      append_dev(ul, li2);
      append_dev(li2, a4);
      append_dev(a4, t7);
      append_dev(ul, t8);
      append_dev(ul, li3);
      append_dev(li3, a5);
      append_dev(a5, t9);
      append_dev(ul, t10);
      append_dev(ul, li4);
      append_dev(li4, a6);
      append_dev(a6, t11);
      append_dev(ul, t12);
      append_dev(ul, li5);
      mount_component(downloadbox, li5, null);
      append_dev(ul, t13);
      append_dev(ul, li6);
      append_dev(li6, a7);
      append_dev(a7, t14);
      append_dev(nav, t15);
      append_dev(nav, span);
      append_dev(span, t16);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (!current || dirty &
      /*segment*/
      1 && a2_aria_current_value !== (a2_aria_current_value =
      /*segment*/
      ctx[0] === undefined ? "page" : undefined)) {
        attr_dev(a2, "aria-current", a2_aria_current_value);
      }

      if (!current || dirty &
      /*segment*/
      1 && a3_aria_current_value !== (a3_aria_current_value =
      /*segment*/
      ctx[0] === "about" ? "page" : undefined)) {
        attr_dev(a3, "aria-current", a3_aria_current_value);
      }

      if (!current || dirty &
      /*segment*/
      1 && a4_aria_current_value !== (a4_aria_current_value =
      /*segment*/
      ctx[0] === "help" ? "page" : undefined)) {
        attr_dev(a4, "aria-current", a4_aria_current_value);
      }

      const downloadbox_changes = {};

      if (dirty &
      /*$$scope*/
      2) {
        downloadbox_changes.$$scope = {
          dirty,
          ctx
        };
      }

      downloadbox.$set(downloadbox_changes);

      if (!current || dirty &
      /*segment*/
      1 && a7_aria_current_value !== (a7_aria_current_value =
      /*segment*/
      ctx[0] === "read" ? "page" : undefined)) {
        attr_dev(a7, "aria-current", a7_aria_current_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(downloadbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(downloadbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(downloadbox);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  validate_slots("Footer", slots, []);
  let {
    segment
  } = $$props;
  const writable_props = ["segment"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
  });

  $$self.$$set = $$props => {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  $$self.$capture_state = () => ({
    DownloadBox,
    segment
  });

  $$self.$inject_state = $$props => {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [segment];
}

class Footer extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      segment: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Footer",
      options,
      id: create_fragment$2.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<Footer> was created without expected prop 'segment'");
    }
  }

  get segment() {
    throw new Error("<Footer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set segment(value) {
    throw new Error("<Footer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

function cubicOut(t) {
  const f = t - 1.0;
  return f * f * f + 1.0;
}

function fade(node, {
  delay = 0,
  duration = 400,
  easing = identity
}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: t => `opacity: ${t * o}`
  };
}

function fly(node, {
  delay = 0,
  duration = 400,
  easing = cubicOut,
  x = 0,
  y = 0,
  opacity = 0
}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
  };
}

/* src/components/PageTransition.svelte generated by Svelte v3.29.0 */
const file$3 = "src/components/PageTransition.svelte";

function create_fragment$3(ctx) {
  let div;
  let div_intro;
  let current;
  const default_slot_template =
  /*#slots*/
  ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  const block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div, file$3, 4, 0, 65);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);

      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fly, {
            y: -20,
            duration: 500
          });
          div_intro.start();
        });
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  validate_slots("PageTransition", slots, ['default']);
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PageTransition> was created with unknown prop '${key}'`);
  });

  $$self.$$set = $$props => {
    if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    fly
  });

  return [$$scope, slots];
}

class PageTransition extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PageTransition",
      options,
      id: create_fragment$3.name
    });
  }

}

/* src/routes/_layout.svelte generated by Svelte v3.29.0 */
const file$4 = "src/routes/_layout.svelte"; // (17:1) <PageTransition>

function create_default_slot$2(ctx) {
  let main;
  let current;
  const default_slot_template =
  /*#slots*/
  ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[2], null);
  const block = {
    c: function create() {
      main = element("main");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(main, "class", "flex flex-col items-center justify-center p-4 lg:p-0 max-w-4xl overflow-hidden svelte-1fbdjsw");
      add_location(main, file$4, 17, 2, 655);
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);

      if (default_slot) {
        default_slot.m(main, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[2], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(main);
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: "(17:1) <PageTransition>",
    ctx
  });
  return block;
} // (16:0) {#key segment}


function create_key_block(ctx) {
  let pagetransition;
  let current;
  pagetransition = new PageTransition({
    props: {
      $$slots: {
        default: [create_default_slot$2]
      },
      $$scope: {
        ctx
      }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(pagetransition.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(pagetransition.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(pagetransition, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const pagetransition_changes = {};

      if (dirty &
      /*$$scope*/
      4) {
        pagetransition_changes.$$scope = {
          dirty,
          ctx
        };
      }

      pagetransition.$set(pagetransition_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(pagetransition.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(pagetransition.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(pagetransition, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(16:0) {#key segment}",
    ctx
  });
  return block;
}

function create_fragment$4(ctx) {
  let meta0;
  let meta1;
  let meta2;
  let meta3;
  let meta4;
  let t0;
  let nav;
  let t1;
  let previous_key =
  /*segment*/
  ctx[0];
  let t2;
  let footer;
  let current;
  nav = new Nav({
    props: {
      segment:
      /*segment*/
      ctx[0]
    },
    $$inline: true
  });
  let key_block = create_key_block(ctx);
  footer = new Footer({
    props: {
      segment:
      /*segment*/
      ctx[0]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      t0 = space();
      create_component(nav.$$.fragment);
      t1 = space();
      key_block.c();
      t2 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      const head_nodes = query_selector_all("[data-svelte=\"svelte-x6q15z\"]", document.head);
      meta0 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta1 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta2 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta3 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      meta4 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      claim_component(nav.$$.fragment, nodes);
      t1 = claim_space(nodes);
      key_block.l(nodes);
      t2 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      attr_dev(meta0, "property", "og:site_name");
      attr_dev(meta0, "content", "ObliviousTheBook.com");
      add_location(meta0, file$4, 7, 1, 224);
      attr_dev(meta1, "property", "fb:admins");
      attr_dev(meta1, "content", "563453705");
      add_location(meta1, file$4, 8, 1, 289);
      attr_dev(meta2, "property", "og:image");
      attr_dev(meta2, "content", "https://obliviousthebook.com/images/social-10-21.jpg");
      add_location(meta2, file$4, 9, 1, 340);
      attr_dev(meta3, "name", "twitter:card");
      attr_dev(meta3, "content", "summary_large_image");
      add_location(meta3, file$4, 10, 1, 433);
      attr_dev(meta4, "name", "twitter:image");
      attr_dev(meta4, "content", "https://obliviousthebook.com/images/social-10-21.jpg");
      add_location(meta4, file$4, 11, 1, 493);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, meta0);
      append_dev(document.head, meta1);
      append_dev(document.head, meta2);
      append_dev(document.head, meta3);
      append_dev(document.head, meta4);
      insert_dev(target, t0, anchor);
      mount_component(nav, target, anchor);
      insert_dev(target, t1, anchor);
      key_block.m(target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      const nav_changes = {};
      if (dirty &
      /*segment*/
      1) nav_changes.segment =
      /*segment*/
      ctx[0];
      nav.$set(nav_changes);

      if (dirty &
      /*segment*/
      1 && safe_not_equal(previous_key, previous_key =
      /*segment*/
      ctx[0])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx);
        key_block.c();
        transition_in(key_block);
        key_block.m(t2.parentNode, t2);
      } else {
        key_block.p(ctx, dirty);
      }

      const footer_changes = {};
      if (dirty &
      /*segment*/
      1) footer_changes.segment =
      /*segment*/
      ctx[0];
      footer.$set(footer_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(nav.$$.fragment, local);
      transition_in(key_block);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(nav.$$.fragment, local);
      transition_out(key_block);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach_dev(meta0);
      detach_dev(meta1);
      detach_dev(meta2);
      detach_dev(meta3);
      detach_dev(meta4);
      if (detaching) detach_dev(t0);
      destroy_component(nav, detaching);
      if (detaching) detach_dev(t1);
      key_block.d(detaching);
      if (detaching) detach_dev(t2);
      destroy_component(footer, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance$4($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  validate_slots("Layout", slots, ['default']);
  let {
    segment
  } = $$props;
  const writable_props = ["segment"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Layout> was created with unknown prop '${key}'`);
  });

  $$self.$$set = $$props => {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    Nav,
    Footer,
    PageTransition,
    segment
  });

  $$self.$inject_state = $$props => {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [segment, slots, $$scope];
}

class Layout extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      segment: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Layout",
      options,
      id: create_fragment$4.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<Layout> was created without expected prop 'segment'");
    }
  }

  get segment() {
    throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set segment(value) {
    throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var root_comp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Layout
});

/* src/routes/_error.svelte generated by Svelte v3.29.0 */
const {
  Error: Error_1
} = globals;
const file$5 = "src/routes/_error.svelte"; // (35:0) {#if dev && error.stack}

function create_if_block$1(ctx) {
  let pre;
  let t_value =
  /*error*/
  ctx[1].stack + "";
  let t;
  const block = {
    c: function create() {
      pre = element("pre");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      pre = claim_element(nodes, "PRE", {});
      var pre_nodes = children(pre);
      t = claim_text(pre_nodes, t_value);
      pre_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(pre, file$5, 35, 1, 1173);
    },
    m: function mount(target, anchor) {
      insert_dev(target, pre, anchor);
      append_dev(pre, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*error*/
      2 && t_value !== (t_value =
      /*error*/
      ctx[1].stack + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(pre);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(35:0) {#if dev && error.stack}",
    ctx
  });
  return block;
}

function create_fragment$5(ctx) {
  let title_value;
  let t0;
  let h1;
  let t1;
  let t2;
  let p;
  let t3_value =
  /*error*/
  ctx[1].message + "";
  let t3;
  let t4;
  let if_block_anchor;
  document.title = title_value =
  /*status*/
  ctx[0];
  let if_block =
  /*dev*/
  ctx[2] &&
  /*error*/
  ctx[1].stack && create_if_block$1(ctx);
  const block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text(
      /*status*/
      ctx[0]);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      const head_nodes = query_selector_all("[data-svelte=\"svelte-1o9r2ue\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes,
      /*status*/
      ctx[0]);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "svelte-pk4dni");
      add_location(h1, file$5, 30, 0, 1104);
      attr_dev(p, "class", "svelte-pk4dni");
      add_location(p, file$5, 32, 0, 1123);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, p, anchor);
      append_dev(p, t3);
      insert_dev(target, t4, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*status*/
      1 && title_value !== (title_value =
      /*status*/
      ctx[0])) {
        document.title = title_value;
      }

      if (dirty &
      /*status*/
      1) set_data_dev(t1,
      /*status*/
      ctx[0]);
      if (dirty &
      /*error*/
      2 && t3_value !== (t3_value =
      /*error*/
      ctx[1].message + "")) set_data_dev(t3, t3_value);

      if (
      /*dev*/
      ctx[2] &&
      /*error*/
      ctx[1].stack) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t4);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance$5($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  validate_slots("Error", slots, []);
  let {
    status
  } = $$props;
  let {
    error
  } = $$props;
  const dev = "development" === "development";
  const writable_props = ["status", "error"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Error> was created with unknown prop '${key}'`);
  });

  $$self.$$set = $$props => {
    if ("status" in $$props) $$invalidate(0, status = $$props.status);
    if ("error" in $$props) $$invalidate(1, error = $$props.error);
  };

  $$self.$capture_state = () => ({
    status,
    error,
    dev
  });

  $$self.$inject_state = $$props => {
    if ("status" in $$props) $$invalidate(0, status = $$props.status);
    if ("error" in $$props) $$invalidate(1, error = $$props.error);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [status, error, dev];
}

class Error$1 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      status: 0,
      error: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Error",
      options,
      id: create_fragment$5.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*status*/
    ctx[0] === undefined && !("status" in props)) {
      console.warn("<Error> was created without expected prop 'status'");
    }

    if (
    /*error*/
    ctx[1] === undefined && !("error" in props)) {
      console.warn("<Error> was created without expected prop 'error'");
    }
  }

  get status() {
    throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set status(value) {
    throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get error() {
    throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set error(value) {
    throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.29.0 */
const {
  Error: Error_1$1
} = globals;

function create_else_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [{
    segment:
    /*segments*/
    ctx[2][1]
  },
  /*level1*/
  ctx[4].props];
  var switch_value =
  /*level1*/
  ctx[4].component;

  function switch_props(ctx) {
    let switch_instance_props = {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx
      }
    };

    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }

  const block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const switch_instance_changes = dirty &
      /*segments, level1*/
      20 ? get_spread_update(switch_instance_spread_levels, [dirty &
      /*segments*/
      4 && {
        segment:
        /*segments*/
        ctx[2][1]
      }, dirty &
      /*level1*/
      16 && get_spread_object(
      /*level1*/
      ctx[4].props)]) : {};

      if (dirty &
      /*$$scope, level2*/
      288) {
        switch_instance_changes.$$scope = {
          dirty,
          ctx
        };
      }

      if (switch_value !== (switch_value =
      /*level1*/
      ctx[4].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(24:1) {:else}",
    ctx
  });
  return block;
} // (22:1) {#if error}


function create_if_block$2(ctx) {
  let error_1;
  let current;
  error_1 = new Error$1({
    props: {
      error:
      /*error*/
      ctx[0],
      status:
      /*status*/
      ctx[1]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(error_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(error_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(error_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const error_1_changes = {};
      if (dirty &
      /*error*/
      1) error_1_changes.error =
      /*error*/
      ctx[0];
      if (dirty &
      /*status*/
      2) error_1_changes.status =
      /*status*/
      ctx[1];
      error_1.$set(error_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(error_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(error_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(error_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(22:1) {#if error}",
    ctx
  });
  return block;
} // (26:3) {#if level2}


function create_if_block_1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
  /*level2*/
  ctx[5].props];
  var switch_value =
  /*level2*/
  ctx[5].component;

  function switch_props(ctx) {
    let switch_instance_props = {};

    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }

  const block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      const switch_instance_changes = dirty &
      /*level2*/
      32 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
      /*level2*/
      ctx[5].props)]) : {};

      if (switch_value !== (switch_value =
      /*level2*/
      ctx[5].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(26:3) {#if level2}",
    ctx
  });
  return block;
} // (25:2) <svelte:component this="{level1.component}" segment="{segments[1]}" {...level1.props}>


function create_default_slot_1(ctx) {
  let if_block_anchor;
  let current;
  let if_block =
  /*level2*/
  ctx[5] && create_if_block_1(ctx);
  const block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*level2*/
      ctx[5]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*level2*/
          32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(25:2) <svelte:component this=\\\"{level1.component}\\\" segment=\\\"{segments[1]}\\\" {...level1.props}>",
    ctx
  });
  return block;
} // (21:0) <Layout segment="{segments[0]}" {...level0.props}>


function create_default_slot$3(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*error*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: "(21:0) <Layout segment=\\\"{segments[0]}\\\" {...level0.props}>",
    ctx
  });
  return block;
}

function create_fragment$6(ctx) {
  let layout;
  let current;
  const layout_spread_levels = [{
    segment:
    /*segments*/
    ctx[2][0]
  },
  /*level0*/
  ctx[3].props];
  let layout_props = {
    $$slots: {
      default: [create_default_slot$3]
    },
    $$scope: {
      ctx
    }
  };

  for (let i = 0; i < layout_spread_levels.length; i += 1) {
    layout_props = assign(layout_props, layout_spread_levels[i]);
  }

  layout = new Layout({
    props: layout_props,
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(layout.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(layout.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      const layout_changes = dirty &
      /*segments, level0*/
      12 ? get_spread_update(layout_spread_levels, [dirty &
      /*segments*/
      4 && {
        segment:
        /*segments*/
        ctx[2][0]
      }, dirty &
      /*level0*/
      8 && get_spread_object(
      /*level0*/
      ctx[3].props)]) : {};

      if (dirty &
      /*$$scope, error, status, level1, segments, level2*/
      311) {
        layout_changes.$$scope = {
          dirty,
          ctx
        };
      }

      layout.$set(layout_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(layout, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance$6($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  validate_slots("App", slots, []);
  let {
    stores
  } = $$props;
  let {
    error
  } = $$props;
  let {
    status
  } = $$props;
  let {
    segments
  } = $$props;
  let {
    level0
  } = $$props;
  let {
    level1 = null
  } = $$props;
  let {
    level2 = null
  } = $$props;
  let {
    notify
  } = $$props;
  afterUpdate(notify);
  setContext(CONTEXT_KEY, stores);
  const writable_props = ["stores", "error", "status", "segments", "level0", "level1", "level2", "notify"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
  });

  $$self.$$set = $$props => {
    if ("stores" in $$props) $$invalidate(6, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
    if ("level2" in $$props) $$invalidate(5, level2 = $$props.level2);
    if ("notify" in $$props) $$invalidate(7, notify = $$props.notify);
  };

  $$self.$capture_state = () => ({
    setContext,
    afterUpdate,
    CONTEXT_KEY,
    Layout,
    Error: Error$1,
    stores,
    error,
    status,
    segments,
    level0,
    level1,
    level2,
    notify
  });

  $$self.$inject_state = $$props => {
    if ("stores" in $$props) $$invalidate(6, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
    if ("level2" in $$props) $$invalidate(5, level2 = $$props.level2);
    if ("notify" in $$props) $$invalidate(7, notify = $$props.notify);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [error, status, segments, level0, level1, level2, stores, notify];
}

class App extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      stores: 6,
      error: 0,
      status: 1,
      segments: 2,
      level0: 3,
      level1: 4,
      level2: 5,
      notify: 7
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment$6.name
    });
    const {
      ctx
    } = this.$$;
    const props = options.props || {};

    if (
    /*stores*/
    ctx[6] === undefined && !("stores" in props)) {
      console.warn("<App> was created without expected prop 'stores'");
    }

    if (
    /*error*/
    ctx[0] === undefined && !("error" in props)) {
      console.warn("<App> was created without expected prop 'error'");
    }

    if (
    /*status*/
    ctx[1] === undefined && !("status" in props)) {
      console.warn("<App> was created without expected prop 'status'");
    }

    if (
    /*segments*/
    ctx[2] === undefined && !("segments" in props)) {
      console.warn("<App> was created without expected prop 'segments'");
    }

    if (
    /*level0*/
    ctx[3] === undefined && !("level0" in props)) {
      console.warn("<App> was created without expected prop 'level0'");
    }

    if (
    /*notify*/
    ctx[7] === undefined && !("notify" in props)) {
      console.warn("<App> was created without expected prop 'notify'");
    }
  }

  get stores() {
    throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set stores(value) {
    throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get error() {
    throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set error(value) {
    throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get status() {
    throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set status(value) {
    throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get segments() {
    throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set segments(value) {
    throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get level0() {
    throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set level0(value) {
    throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get level1() {
    throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set level1(value) {
    throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get level2() {
    throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set level2(value) {
    throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get notify() {
    throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set notify(value) {
    throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

// This file is generated by Sapper — do not edit it!
const ignore = [/^\/read\/book-index\.json$/, /^\/read\/smooth-scroll\/?$/, /^\/read\/reader-hints\/?$/, /^\/read\/(.+)\.json$/];
const components = [{
  js: () => Promise.all([import('./index.01a6aa9f.js'), __inject_styles(["client-db8c69f1.css"])]).then(function(x) { return x[0]; })
}, {
  js: () => Promise.all([import('./success.f18f6385.js'), __inject_styles(["client-db8c69f1.css"])]).then(function(x) { return x[0]; })
}, {
  js: () => Promise.all([import('./about.7c5e84f5.js'), __inject_styles(["client-db8c69f1.css"])]).then(function(x) { return x[0]; })
}, {
  js: () => Promise.all([import('./help.ec3f7a90.js'), __inject_styles(["client-db8c69f1.css"])]).then(function(x) { return x[0]; })
}, {
  js: () => Promise.all([import('./_layout.151ffcf3.js'), __inject_styles(["client-db8c69f1.css"])]).then(function(x) { return x[0]; })
}, {
  js: () => Promise.all([import('./index.e8534977.js'), __inject_styles(["client-db8c69f1.css"])]).then(function(x) { return x[0]; })
}, {
  js: () => Promise.all([import('./[...slug].c95012ce.js'), __inject_styles(["client-db8c69f1.css","[...slug]-194ea0b2.css"])]).then(function(x) { return x[0]; })
}];
const routes = (d => [{
  // index.svelte
  pattern: /^\/$/,
  parts: [{
    i: 0
  }]
}, {
  // success.svelte
  pattern: /^\/success\/?$/,
  parts: [{
    i: 1
  }]
}, {
  // about.svelte
  pattern: /^\/about\/?$/,
  parts: [{
    i: 2
  }]
}, {
  // help.svelte
  pattern: /^\/help\/?$/,
  parts: [{
    i: 3
  }]
}, {
  // read/index.svelte
  pattern: /^\/read\/?$/,
  parts: [{
    i: 4
  }, {
    i: 5
  }]
}, {
  // read/[...slug].svelte
  pattern: /^\/read\/(.+)\/?$/,
  parts: [{
    i: 4
  }, {
    i: 6,
    params: match => ({
      slug: d(match[1]).split('/')
    })
  }]
}])(decodeURIComponent);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function find_anchor(node) {
  while (node && node.nodeName.toUpperCase() !== 'A') node = node.parentNode; // SVG <a> elements have a lowercase name


  return node;
}

let uid = 1;

function set_uid(n) {
  uid = n;
}

let cid;

function set_cid(n) {
  cid = n;
}

const _history = typeof history !== 'undefined' ? history : {
  pushState: () => {},
  replaceState: () => {},
  scrollRestoration: 'auto'
};

const scroll_history = {};

function load_current_page() {
  return Promise.resolve().then(() => {
    const {
      hash,
      href
    } = location;

    _history.replaceState({
      id: uid
    }, '', href);

    const target = select_target(new URL(location.href));
    if (target) return navigate(target, uid, true, hash);
  });
}

let base_url;
let handle_target;

function init$1(base, handler) {
  base_url = base;
  handle_target = handler;

  if ('scrollRestoration' in _history) {
    _history.scrollRestoration = 'manual';
  } // Adopted from Nuxt.js
  // Reset scrollRestoration to auto when leaving page, allowing page reload
  // and back-navigation from other pages to use the browser to restore the
  // scrolling position.


  addEventListener('beforeunload', () => {
    _history.scrollRestoration = 'auto';
  }); // Setting scrollRestoration to manual again when returning to this page.

  addEventListener('load', () => {
    _history.scrollRestoration = 'manual';
  });
  addEventListener('click', handle_click);
  addEventListener('popstate', handle_popstate);
}

function extract_query(search) {
  const query = Object.create(null);

  if (search.length > 0) {
    search.slice(1).split('&').forEach(searchParam => {
      const [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
      if (typeof query[key] === 'string') query[key] = [query[key]];
      if (typeof query[key] === 'object') query[key].push(value);else query[key] = value;
    });
  }

  return query;
}

function select_target(url) {
  if (url.origin !== location.origin) return null;
  if (!url.pathname.startsWith(base_url)) return null;
  let path = url.pathname.slice(base_url.length);

  if (path === '') {
    path = '/';
  } // avoid accidental clashes between server routes and page routes


  if (ignore.some(pattern => pattern.test(path))) return;

  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];
    const match = route.pattern.exec(path);

    if (match) {
      const query = extract_query(url.search);
      const part = route.parts[route.parts.length - 1];
      const params = part.params ? part.params(match) : {};
      const page = {
        host: location.host,
        path,
        query,
        params
      };
      return {
        href: url.href,
        route,
        match,
        page
      };
    }
  }
}

function handle_click(event) {
  // Adapted from https://github.com/visionmedia/page.js
  // MIT license https://github.com/visionmedia/page.js#license
  if (which(event) !== 1) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (event.defaultPrevented) return;
  const a = find_anchor(event.target);
  if (!a) return;
  if (!a.href) return; // check if link is inside an svg
  // in this case, both href and target are always inside an object

  const svg = typeof a.href === 'object' && a.href.constructor.name === 'SVGAnimatedString';
  const href = String(svg ? a.href.baseVal : a.href);

  if (href === location.href) {
    if (!location.hash) event.preventDefault();
    return;
  } // Ignore if tag has
  // 1. 'download' attribute
  // 2. rel='external' attribute


  if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return; // Ignore if <a> has a target

  if (svg ? a.target.baseVal : a.target) return;
  const url = new URL(href); // Don't handle hash changes

  if (url.pathname === location.pathname && url.search === location.search) return;
  const target = select_target(url);

  if (target) {
    const noscroll = a.hasAttribute('sapper:noscroll');
    navigate(target, null, noscroll, url.hash);
    event.preventDefault();

    _history.pushState({
      id: cid
    }, '', url.href);
  }
}

function which(event) {
  return event.which === null ? event.button : event.which;
}

function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}

function handle_popstate(event) {
  scroll_history[cid] = scroll_state();

  if (event.state) {
    const url = new URL(location.href);
    const target = select_target(url);

    if (target) {
      navigate(target, event.state.id);
    } else {
      // eslint-disable-next-line
      location.href = location.href; // nosonar
    }
  } else {
    // hashchange
    set_uid(uid + 1);
    set_cid(uid);

    _history.replaceState({
      id: cid
    }, '', location.href);
  }
}

function navigate(dest, id, noscroll, hash) {
  return __awaiter(this, void 0, void 0, function* () {
    const popstate = !!id;

    if (popstate) {
      cid = id;
    } else {
      const current_scroll = scroll_state(); // clicked on a link. preserve scroll state

      scroll_history[cid] = current_scroll;
      cid = id = ++uid;
      scroll_history[cid] = noscroll ? current_scroll : {
        x: 0,
        y: 0
      };
    }

    yield handle_target(dest);
    if (document.activeElement && document.activeElement instanceof HTMLElement) document.activeElement.blur();

    if (!noscroll) {
      let scroll = scroll_history[id];
      let deep_linked;

      if (hash) {
        // scroll is an element id (from a hash), we need to compute y.
        deep_linked = document.getElementById(hash.slice(1));

        if (deep_linked) {
          scroll = {
            x: 0,
            y: deep_linked.getBoundingClientRect().top + scrollY
          };
        }
      }

      scroll_history[cid] = scroll;

      if (popstate || deep_linked) {
        scrollTo(scroll.x, scroll.y);
      } else {
        scrollTo(0, 0);
      }
    }
  });
}

function get_base_uri(window_document) {
  let baseURI = window_document.baseURI;

  if (!baseURI) {
    const baseTags = window_document.getElementsByTagName('base');
    baseURI = baseTags.length ? baseTags[0].href : window_document.URL;
  }

  return baseURI;
}

let prefetching = null;
let mousemove_timeout;

function start() {
  addEventListener('touchstart', trigger_prefetch);
  addEventListener('mousemove', handle_mousemove);
}

function prefetch(href) {
  const target = select_target(new URL(href, get_base_uri(document)));

  if (target) {
    if (!prefetching || href !== prefetching.href) {
      prefetching = {
        href,
        promise: hydrate_target(target)
      };
    }

    return prefetching.promise;
  }
}

function get_prefetched(target) {
  if (prefetching && prefetching.href === target.href) {
    return prefetching.promise;
  } else {
    return hydrate_target(target);
  }
}

function trigger_prefetch(event) {
  const a = find_anchor(event.target);

  if (a && a.rel === 'prefetch') {
    prefetch(a.href);
  }
}

function handle_mousemove(event) {
  clearTimeout(mousemove_timeout);
  mousemove_timeout = setTimeout(() => {
    trigger_prefetch(event);
  }, 20);
}

function goto(href, opts = {
  noscroll: false,
  replaceState: false
}) {
  const target = select_target(new URL(href, get_base_uri(document)));

  if (target) {
    _history[opts.replaceState ? 'replaceState' : 'pushState']({
      id: cid
    }, '', href);

    return navigate(target, null, opts.noscroll);
  }

  location.href = href;
  return new Promise(() => {
    /* never resolves */
  });
}

function page_store(value) {
  const store = writable(value);
  let ready = true;

  function notify() {
    ready = true;
    store.update(val => val);
  }

  function set(new_value) {
    ready = false;
    store.set(new_value);
  }

  function subscribe(run) {
    let old_value;
    return store.subscribe(new_value => {
      if (old_value === undefined || ready && new_value !== old_value) {
        run(old_value = new_value);
      }
    });
  }

  return {
    notify,
    set,
    subscribe
  };
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];
let current_query = '{}';
const stores = {
  page: page_store({}),
  preloading: writable(null),
  session: writable(initial_data && initial_data.session)
};
let $session;
let session_dirty;
stores.session.subscribe(value => __awaiter(void 0, void 0, void 0, function* () {
  $session = value;
  if (!ready) return;
  session_dirty = true;
  const dest = select_target(new URL(location.href));
  const token = current_token = {};
  const {
    redirect,
    props,
    branch
  } = yield hydrate_target(dest);
  if (token !== current_token) return; // a secondary navigation happened while we were loading

  if (redirect) {
    yield goto(redirect.location, {
      replaceState: true
    });
  } else {
    yield render(branch, props, buildPageContext(props, dest.page));
  }
}));
let target;

function set_target(node) {
  target = node;
}

function start$1(opts) {
  set_target(opts.target);
  init$1(initial_data.baseUrl, handle_target$1);
  start();

  if (initial_data.error) {
    return Promise.resolve().then(() => {
      return handle_error();
    });
  }

  return load_current_page();
}

function handle_error() {
  const {
    host,
    pathname,
    search
  } = location;
  const {
    session,
    preloaded,
    status,
    error
  } = initial_data;

  if (!root_preloaded) {
    root_preloaded = preloaded && preloaded[0];
  }

  const props = {
    error,
    status,
    session,
    level0: {
      props: root_preloaded
    },
    level1: {
      props: {
        status,
        error
      },
      component: Error$1
    },
    segments: preloaded
  };
  const query = extract_query(search);
  render([], props, {
    host,
    path: pathname,
    query,
    params: {},
    error
  });
}

function buildPageContext(props, page) {
  const {
    error
  } = props;
  return Object.assign({
    error
  }, page);
}

function handle_target$1(dest) {
  return __awaiter(this, void 0, void 0, function* () {
    if (root_component) stores.preloading.set(true);
    const hydrating = get_prefetched(dest);
    const token = current_token = {};
    const hydrated_target = yield hydrating;
    const {
      redirect
    } = hydrated_target;
    if (token !== current_token) return; // a secondary navigation happened while we were loading

    if (redirect) {
      yield goto(redirect.location, {
        replaceState: true
      });
    } else {
      const {
        props,
        branch
      } = hydrated_target;
      yield render(branch, props, buildPageContext(props, dest.page));
    }
  });
}

function render(branch, props, page) {
  return __awaiter(this, void 0, void 0, function* () {
    stores.page.set(page);
    stores.preloading.set(false);

    if (root_component) {
      root_component.$set(props);
    } else {
      props.stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        preloading: {
          subscribe: stores.preloading.subscribe
        },
        session: stores.session
      };
      props.level0 = {
        props: yield root_preloaded
      };
      props.notify = stores.page.notify;
      root_component = new App({
        target,
        props,
        hydrate: true
      });
    }

    current_branch = branch;
    current_query = JSON.stringify(page.query);
    ready = true;
    session_dirty = false;
  });
}

function part_changed(i, segment, match, stringified_query) {
  // TODO only check query string changes for preload functions
  // that do in fact depend on it (using static analysis or
  // runtime instrumentation)
  if (stringified_query !== current_query) return true;
  const previous = current_branch[i];
  if (!previous) return false;
  if (segment !== previous.segment) return true;

  if (previous.match) {
    if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
      return true;
    }
  }
}

function hydrate_target(dest) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      route,
      page
    } = dest;
    const segments = page.path.split('/').filter(Boolean);
    let redirect = null;
    const props = {
      error: null,
      status: 200,
      segments: [segments[0]]
    };
    const preload_context = {
      fetch: (url, opts) => fetch(url, opts),
      redirect: (statusCode, location) => {
        if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
          throw new Error('Conflicting redirects');
        }

        redirect = {
          statusCode,
          location
        };
      },
      error: (status, error) => {
        props.error = typeof error === 'string' ? new Error(error) : error;
        props.status = status;
      }
    };

    if (!root_preloaded) {
      const root_preload = undefined || (() => ({}));

      root_preloaded = initial_data.preloaded[0] || root_preload.call(preload_context, {
        host: page.host,
        path: page.path,
        query: page.query,
        params: {}
      }, $session);
    }

    let branch;
    let l = 1;

    try {
      const stringified_query = JSON.stringify(page.query);
      const match = route.pattern.exec(page.path);
      let segment_dirty = false;
      branch = yield Promise.all(route.parts.map((part, i) => __awaiter(this, void 0, void 0, function* () {
        const segment = segments[i];
        if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;
        props.segments[l] = segments[i + 1]; // TODO make this less confusing

        if (!part) return {
          segment
        };
        const j = l++;

        if (!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i) {
          return current_branch[i];
        }

        segment_dirty = false;
        const {
          default: component,
          preload
        } = yield components[part.i].js();
        let preloaded;

        if (ready || !initial_data.preloaded[i + 1]) {
          preloaded = preload ? yield preload.call(preload_context, {
            host: page.host,
            path: page.path,
            query: page.query,
            params: part.params ? part.params(dest.match) : {}
          }, $session) : {};
        } else {
          preloaded = initial_data.preloaded[i + 1];
        }

        return props[`level${j}`] = {
          component,
          props: preloaded,
          segment,
          match,
          part: part.i
        };
      })));
    } catch (error) {
      props.error = error;
      props.status = 500;
      branch = [];
    }

    return {
      redirect,
      props,
      branch
    };
  });
}

const stores$1 = () => getContext(CONTEXT_KEY);

start$1({
    target: document.querySelector('#sapper')
});

export { mount_component as A, transition_in as B, transition_out as C, DownloadBox as D, destroy_component as E, noop as F, validate_each_argument as G, validate_store as H, component_subscribe as I, stores$1 as J, create_in_transition as K, create_out_transition as L, empty as M, check_outros as N, destroy_each as O, PageTransition as P, toggle_class as Q, create_slot as R, SvelteComponentDev as S, group_outros as T, update_slot as U, writable as V, onMount as W, globals as X, binding_callbacks as Y, HtmlTag as Z, space as a, children as b, claim_element as c, dispatch_dev as d, element as e, fade as f, claim_space as g, detach_dev as h, init as i, claim_text as j, attr_dev as k, add_location as l, insert_dev as m, append_dev as n, onDestroy as o, listen_dev as p, set_data_dev as q, add_render_callback as r, safe_not_equal as s, text as t, create_bidirectional_transition as u, validate_slots as v, run_all as w, create_component as x, query_selector_all as y, claim_component as z };

import __inject_styles from './inject_styles.fe622066.js';