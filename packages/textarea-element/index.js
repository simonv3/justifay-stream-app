const html = require('nanohtml')
const { foreground } = require('@justifay/theme-skins')
const classnames = require('classnames')

module.exports = (props) => {
  const {
    text,
    invalid = false,
    maxlength = 200,
    spellcheck = false,
    rows = 4,
    autofocus = false,
    id = props.name || props.type, name,
    onchange = null,
    theme = 'auto',
    placeholder = '',
    autocomplete = false,
    required = 'required'
  } = props

  const prefix = props.prefix || props.classList

  const attrs = {
    maxlength: maxlength,
    spellcheck: spellcheck,
    rows,
    autofocus: autofocus,
    class: classnames(
      prefix,
      theme === 'dark' ? 'bg-black white' : theme === 'light' ? 'bg-white black' : foreground,
      'placeholder--dark-gray input-reset w-100 bn pa3',
      invalid ? 'invalid' : 'valid'
    ),
    onchange: onchange,
    autocomplete: autocomplete,
    id: id,
    name: name,
    placeholder: placeholder,
    required: !!required
  }

  return html`<textarea ${attrs}>${text}</textarea>`
}
