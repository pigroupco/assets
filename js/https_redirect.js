var links = document.links;
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   links[i].href = links[i].href.replace('http://', 'https://');
}

var forms = document.forms;
for (var i = 0, formsLength = forms.length; i < formsLength; i++) {
   forms[i].action = forms[i].action.replace('http://', 'https://');
}
