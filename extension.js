// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');

function getVisualSelection() {
  const editor = vscode.window.activeTextEditor;

  if(!editor) return '';

  const selection = editor.selection;

  return editor.document.getText(selection);
}

async function submitVisualSelectionAsBlueprint() {
  const selectedText = getVisualSelection();
  const json_data = { code: selectedText };
  const url = "http://localhost:3000/api/v1/blueprints";

  try {
    await axios.post(url, json_data);
    vscode.window.showInformationMessage('Blueprint submitted successfully.');
  } catch (error) {
    vscode.window.showErrorMessage("Error Submitting Blueprint.");
  }
}

async function replaceVisualSelectionWithServerResponse() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selectedText = getVisualSelection();
  const json_data = { description: selectedText };
  const url = "http://localhost:3000/api/v1/blueprint_variants";

  try {
    const response = await axios.post(url, json_data);
    editor.edit(editBuilder => {
      editBuilder.replace(editor.selection, response.data.result);
    });
  } catch (error) {
    vscode.window.showErrorMessage("Error Replacing Selection");
  }
}

function activate(context) {
  context.subscriptions.push(vscode.commands.registerCommand('sublayer-blueprints.submitBlueprint', submitVisualSelectionAsBlueprint));
  context.subscriptions.push(vscode.commands.registerCommand('sublayer-blueprints.replaceSelection', replaceVisualSelectionWithServerResponse));
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
}
