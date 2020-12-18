export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdce6d6204a0d30a87e67d1',
                  title: 'Sanity Studio',
                  name: 'wordio-blog-studio',
                  apiId: '80dd6acc-2407-4966-9d0d-6c6d23f012f3'
                },
                {
                  buildHookId: '5fdce6d689be28009acf6e83',
                  title: 'Blog Website',
                  name: 'wordio-blog',
                  apiId: '46198474-24fb-4b4a-9027-467f94bcf673'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paulshorey/wordio-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://wordio-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
