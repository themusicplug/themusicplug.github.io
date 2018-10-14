---

layout: plugins
category: plugins
page-title: The Music Plug - Free Plugins
article-title: Plugins

---

<style>
	.demo-card-wide > .mdl-card__title {
		color: #fff;
		height: 176px;
	}
	.demo-card-wide > .mdl-card__menu {
		color: #fff;
	}
</style>

{% for id in site.data.articles.plugins-list %}
{% if site.data.articles.articles.plugins[id] %}
<div style="display: inline-block; margin: .3rem;">

  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title" style="background: url('{{ site.baseurl }}/images/{{ site.data.articles.articles.plugins[id].image }}') center / cover;">
      <h2 class="mdl-card__title-text mdl-card-drop-shadow transp-bg-mdl-title">{{ site.data.articles.articles.plugins[id].title }}</h2>
    </div>
    <div class="mdl-card__supporting-text">{{ site.data.articles.articles.plugins[id].description }}</div>
    <div class="mdl-card__actions mdl-card--border">
      <a href="{{ site.baseurl }}/{{ site.data.articles.articles.plugins[id].url }}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Get Started
      </a>
    </div>
  </div>
  
</div>
{% endif %}
{% endfor %}
