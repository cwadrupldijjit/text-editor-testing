/* global EpicEditor */
var editor = new EpicEditor({
	theme: {
		base: '../../styles/epic-editor/epiceditor.css',
		preview: '../../styles/epic-editor/github.css',
		editor: '../../styles/epic-editor/epic-light.css'
	},
	button: {
		bar: true
	}
});

var selection;

function grabSelection() {
	selection = window.getSelection().toString();
}

function alertSelection() {
	alert(selection);
}

function openEditor() {
	editor.load(function() {
		console.log('editor loaded');
	});
}

function closeEditor () {
	editor.unload(function() {
		console.log('editor unloaded');
	});
}