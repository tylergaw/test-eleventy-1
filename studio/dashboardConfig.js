export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60fc28cd285394197c7f23c4',
                  title: 'Sanity Studio',
                  name: 'test-eleventy-1-studio',
                  apiId: '31227f53-bf1e-47a8-b887-0a292f5a5f35'
                },
                {
                  buildHookId: '60fc28cd600c660a40e36610',
                  title: 'Blog Website',
                  name: 'test-eleventy-1',
                  apiId: '9e8ae4d2-1ae9-4388-9886-f7f56d843c56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tylergaw/test-eleventy-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-eleventy-1.netlify.app', category: 'apps'}
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
