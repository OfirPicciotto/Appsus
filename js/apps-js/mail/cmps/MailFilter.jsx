export class MailFilter extends React.Component {
    state = {
        txt: '',
        isRotate: false
    };

    refreshTimeout

    handleChange = (ev) => {
        const value = ev.target.value;
        this.setState({ txt: value }, () => {
            this.onFilter();
        });
    };

    onFilter = (ev = null) => {
        if (ev) ev.preventDefault();
        this.props.onSearch(this.state.txt)
    };

    onRotate = () => {
        this.setState({ isRotate: true }, () => {
            this.refreshTimeout = setTimeout(() => {
                clearTimeout(this.refreshTimeout)
                this.setState({ isRotate: false })
                this.props.onRefresh()
            }, 500);
        })
    }

    render() {
        const { txt, isRotate } = this.state;
        const { onSetDisplay, currDisplay } = this.props;
        return (
            <form className='mail-filter' onSubmit={this.onFilter}>
                <img src="img/search.svg" alt="search.svg"/>
                <input
                    name='search-bar'
                    type='search'
                    placeholder='Search...'
                    value={txt}
                    onChange={this.handleChange}
                />
                <select name="displays" id="display-picker"
                    value={currDisplay}
                    onChange={() => onSetDisplay(event.target.value)}>
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                    <option value="title">Title</option>
                    <option value="date">Date</option>
                </select>
                <img  title="refresh mails" className={isRotate ? 'rotate' : 'refresh'}
                    src="img/refresh.svg"
                    onClick={this.onRotate} />
            </form>
        );
    }
}

