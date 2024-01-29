# sublayer-blueprints README

This plugin integrates with vscode to send chunks of code to Sublayer's
blueprint server as a new blueprint and generate new code based off existing
blueprints using descriptions of what you're working on.

## Installation

Run `git clone git@github.com:sublayerapp/blueprints.code.git`

In your "Extensions" pane, click the "..." at the top and select "Install from
VSIX" 

Navigate to the folder where you cloned the plugin, and select
`sublayer-blueprints-0.0.1.vsix` to install.

## Features

Capture chunks of code and save them as blueprints to then later be used in the
future as bases to generate new code off of.

## Usage

Adds two commands to your editor:

`Submit the selected code as a blueprint` - This command takes whatever code you
have highlighted and submits it to your locally running Sublayer Blueprints
server to save it as a blueprint for future use.

`Generate from blueprint` - This command takes whatever text you have
highlighted and sends it to your locally running Sublayer Blueprints server and
replaces it with a variation based on a blueprint you have stored in the past.

## Requirements

A [Sublayer Blueprints](https://github.com/sublayerapp/blueprints) server running locally on port 3000

### 1.0.0

Initial release of Sublayer Blueprints Plugin

