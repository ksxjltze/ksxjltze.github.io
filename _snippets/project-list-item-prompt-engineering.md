<!-- liquid-style-capture: project-list-item-style -> project-list-item -->
{% capture project-list-item-style %}
style="    
    /*(sw-if project.background): background-image*/
    {%-if project.background -%}
        background-image: url('{{project.background}}');
    {%-endif-%}

    /*(sw-if project.text-color): color*/
    {%-if project.text-color-%}
        color: {{project.text-color}};
    {%-endif-%}

    /*(sw-if project.text-background-offset-y): background-position-y*/
    {%-if project.text-background-offset-y-%}
        background-position-y: {{project.text-background-offset-y}};
    {%-endif-%}

    /*(sw-if project.text-background-offset-x): background-position-x*/
    {%-if project.text-background-offset-x-%}
        background-position-x: {{project.text-background-offset-x}};
    {%-endif-%}

    /*(sw-if project.text-background-size): background-size*/
    {%-if project.text-background-size-%}
        background-size: {{project.text-background-size}};
    {%-endif-%}

    /*(sw-if project.text-background-repeat): background-repeat*/
    {%-if project.text-background-repeat-%}
        background-repeat: {{project.text-background-repeat}};
    {%-endif-%}"
{% endcapture %}

<!-- liquid-style-capture: project-icon-style -> project-icon -->
{% capture project-icon-style %}
style=
"{%-if project.icon-radius-%}
    border-radius: {{project.icon-radius}};
{%-endif-%}
{%-if project.icon-scale-%}
    transform: scale({{project.icon-scale;}});
{%-endif-%}"
{% endcapture %}

{% assign icon = project.project-icon %}
{% if icon == null or icon == "" %} {% assign icon = "/images/boi.png" %} {% endif %}

<!-- liquid-style-capture: project-details-text-style -> project-link -->
{% capture project-details-text-style %}
    style="    
    /*(sw-if project.text-color): color*/
    {%-if project.text-color-%}
        color: {{project.text-color}};
    {%-endif-%}
    text-decoration: none;"
{% endcapture %}

<!-- liquid-style-capture: project-details-style -> project-details -->
{% capture project-details-style %}
    style="background-color: {{project.text-background-color}}"
{% endcapture %}