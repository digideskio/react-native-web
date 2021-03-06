/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * @flow
 */

import UIManager from '../../apis/UIManager';

/**
 * This class is responsible for coordinating the "focused"
 * state for TextInputs. All calls relating to the keyboard
 * should be funneled through here
 */
const TextInputState = {
   /**
   * Internal state
   */
  _currentlyFocusedNode: (null: ?Object),

  /**
   * Returns the ID of the currently focused text field, if one exists
   * If no text field is focused it returns null
   */
  currentlyFocusedField(): ?Object {
    return this._currentlyFocusedNode;
  },

  /**
   * @param {Object} TextInputID id of the text field to focus
   * Focuses the specified text field
   * noop if the text field was already focused
   */
  focusTextInput(textFieldNode: ?Object) {
    if (this._currentlyFocusedNode !== textFieldNode && textFieldNode !== null) {
      this._currentlyFocusedNode = textFieldNode;
      UIManager.focus(textFieldNode);
    }
  },

  /**
   * @param {Object} textFieldNode id of the text field to focus
   * Unfocuses the specified text field
   * noop if it wasn't focused
   */
  blurTextInput(textFieldNode: ?Object) {
    if (this._currentlyFocusedNode === textFieldNode && textFieldNode !== null) {
      this._currentlyFocusedNode = null;
      UIManager.blur(textFieldNode);
    }
  }
};

module.exports = TextInputState;
