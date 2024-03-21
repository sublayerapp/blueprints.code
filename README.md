# sublayer-blueprints README

This plugin integrates with vscode to send chunks of code to Sublayer's
blueprint server as a new blueprint and generate new code based off existing
blueprints using descriptions of what you're working on.

## Installation

Run `git clone git@github.com:sublayerapp/blueprints.code.git`

In your "Extensions" pane, click the "..." at the top and select "Install from
VSIX" 

Navigate to the folder where you cloned the plugin, and select
`sublayer-blueprints-0.0.2.vsix` to install.

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

Adding a custom host:
- Browse to the settings pane in vscode
- Search for "sublayer-blueprints"
- Click the gear icon and select Extension Settings
- Set Sublayer-blueprints: Host to the host of your blueprints server, ex:
  `https://localhost:1337`


## Requirements

A [Sublayer Blueprints](https://github.com/sublayerapp/blueprints) server running locally on port 3000


### 0.0.2

The ability to set a custom host and port for your blueprints server

### 0.0.1

Initial release of Sublayer Blueprints Plugin

## Community

Like what you see, or looking for more people working on the future of
programming with LLMs? Come join us in the [Promptable Architecture
Discord](https://discord.gg/sjTJszPwXt)
