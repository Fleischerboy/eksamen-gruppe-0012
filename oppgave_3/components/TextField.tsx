const TextField = (props: any) => (
  <fieldset className="textfield">
    <label htmlFor="rules">
      {props.prefix || 'Skriv inn'} {props.name}
    </label>
    <input type="text" id={props.name} required {...props} />
  </fieldset>
)

export default TextField
