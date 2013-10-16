<% if (typeof(title) != "undefined" && typeof(body) != "undefined" ) { %>
  <div id='node-title'><%= title %></div>
  <div id='node-body'><%= body.und[0].safe_value %></div>
<% } %>
