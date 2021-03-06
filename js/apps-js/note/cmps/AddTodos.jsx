import { utilService } from "../../../general-services-js/util.service.js"

export class AddTodos extends React.Component {
  state = {
    txt: '',
    label: ''
  }

  onAdd = (ev) => {
    ev.preventDefault()
    const { txt, label } = this.state

    const note = {
      id: utilService.makeId(),
      type: "note-todos",
      labels: [],
      info: {
        label: `${label}`,
        todos: txt.split(',').map((txt) => {
          return {
            txt,
            doneAt: null,
            isDonel: false,
            id: utilService.makeId()
          }
        })

      },
      style: {

      }
    }

    this.props.funcs.onAdd(note)
  }

  handleChange = (ev) => {
    const field = ev.target.name
    this.setState({ [field]: ev.target.value })
  }


  render() {
    const { txt, label } = this.state
    return (
      <section  >
        <form className='add-actions-section' onSubmit={this.onAdd} action="">
          <section className="add-inputs-section">
            <input name='label' onChange={this.handleChange} value={label} placeholder="Enter Todos Label" type="text" />
            <input name='txt' onChange={this.handleChange} value={txt} placeholder="Enter Todos Separated By," type="text" />
          </section>
          <section className="add-button-section">
            <button>+</button>
          </section>
        </form>
      </section>
    );
  }
}