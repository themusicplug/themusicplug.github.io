---

layout: plugins
category: plugins
page-title: The Music Plug - Free Gate Plugins
article-title: Gates

---

<link rel="stylesheet" href="{{ site.baseurl }}/css/link-cards.css">

<div class="cards">

{% for id in site.data.plugins.gates.gates-list %}
{% if site.data.plugins.gates.plugins[id] %}

<section class="row">
<div class="col s12 m3 l2" style="display: inline-block">
<img style="width: 150px; height: 150px; object-fit: contain" src="{{ site.baseurl }}/images/{{ site.data.plugins.gates.plugins[id].image }}" />
</div>
<div class="col s12 m9 l10" style="display: inline-block; width: 50%;">
	<h1>{{ site.data.plugins.gates.plugins[id].title }}</h1>
	
	{% if site.data.plugins.gates.plugins[id].external == true %}
		<p>{{ site.data.plugins.gates.plugins[id].description }} <a target="_blank" href="{{ site.data.plugins.gates.plugins[id].url }}">Learn more</a></p>
	{% else %}
		<p>{{ site.data.plugins.gates.plugins[id].description }} <a href="{{ site.baseurl }}/{{ site.data.plugins.gates.plugins[id].url }}">Learn more</a></p>
	{% endif %}
</div>
</section>

{% endif %}
{% endfor %}
</div>