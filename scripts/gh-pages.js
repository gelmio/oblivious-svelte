import ghpages from 'gh-pages';

ghpages.publish(
    'build',
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
);