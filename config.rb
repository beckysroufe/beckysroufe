###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page '/*.xml', layout: false
# page '/*.json', layout: false
# page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration
configure :development do
	#LiveReload
	activate :livereload

	# Pretty URLs
	activate :directory_indexes
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Pretty URLs
	activate :directory_indexes

  # Fav icon maker on build
  activate :favicon_maker
end

data.work.works.each do |work|
  proxy "/project-#{work.className}.html", "/work/template.html", :locals => { :work => work, :screens => work.screens }, :ignore => true
end