const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/',
    {
        branch: 'deploy',
        repo: 'https://github.com/gelmio/oblivious-svelte.git',
        user: {
            name: 'gelmio',
            email: 'b3rnr@protonmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!')
    }
)