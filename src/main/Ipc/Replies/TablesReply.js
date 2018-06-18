import connection from '../../Database/Connection'

export default {
  handle (event, database) {
    return connection.tablesForDatabase(database)
      .then(response => {
        event.sender.send('tables-response', response)
      })
      .catch(error => {
        console.log(error)
        event.sender.send('tables-response', error)
      })
  }
}
