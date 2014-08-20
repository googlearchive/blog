Polymer Blog
============

## Contributing

This site is made with [Jekyll](https://github.com/mojombo/jekyll/)

To get started:

**1\.** Clone the repository:

```bash
git clone --recursive git@github.com:polymer/blog.git
cd blog
```

**2\.** Install all modules and needed tools

```bash
npm install
```

Now you're ready to do some work!

## Grunt tasks

`grunt serve # runs using a local appengine server`

## Creating a post

First, make sure you're added to the authors list in `_config.yml`.

Posts are in the `_posts` folder. When creating a new post, the titles should be in the form:  
`YYYY-MM-DD-title.markdown`. Drafts are in the `_drafts` folder.

## Editing the blog

Main page layouts are in `_layouts`, with partials in `_includes`
Editable .scss files are in `_sass`, which are compiled into the `css` folder. These are automatically compiled when the site is compiled, with a jekyll plugin.

## Troubleshooting

* If you run into issues with Compass conflicting with Sass when running `grunt serve`, try running `gem install compass --pre`and retrying.
