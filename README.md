# TicTacToe with ML


## Overview

This project is a desktop-based TicTacToe game where the game logic is implemented in Rust and the AI is trained using Python. Rust handles the game rules, move validation, and the UI via Tauri. The AI is trained using a machine learning model to play TicTacToe, and Python manages the interaction with the model.

Initially, a simple supervised learning approach is used where the AI is trained on data generated from random TicTacToe games. Later, more complex AI techniques, such as reinforcement learning, will be explored.


## Features

- **Game Mechanics**: TicTacToe rules are enforced by the Rust backend.
- **Machine Learning AI**: The AI learns to play TicTacToe using data generated from random games and labeled using heuristics.
- **Desktop UI**: The user interface is built with Tauri, providing a smooth desktop experience.
- **Python Integration**: Python handles the machine learning aspects, receiving the board state, passing it to the model, and sending back the predicted move.



## Data gathering options

1. Random play + heuristics: Automatically label moves based on random games and simple rules (win/loss conditions)

2. AI-generated labels (Minimax): Use a rule-based AI (like Minimax) to generate high-quality training labels

3. Self-play: Simulate games between AI players and label moves based on the outcome



1. Random play steps (implemented in Rust):
    - 2 players make random moves until game is finished with either of 2 states: win/loss or draw
    - Ignore the draws
    - Store a sequence of board states and moves
    - Store 2 latest moves of the winning player as examples of a "winning move"
    - Store the latest move of the losing player as an example of a "losing move"
    - Create a dataset of [board state -> move type] to train the model on


## TODO
