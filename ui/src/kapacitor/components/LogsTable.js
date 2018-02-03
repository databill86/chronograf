import React, {PropTypes} from 'react'

import InfiniteScroll from 'shared/components/InfiniteScroll'
import LogsTableRow from 'src/kapacitor/components/LogsTableRow'

const LogsTable = ({logs, onToggleExpandLog}) =>
  <div className="logs-table--container">
    <div className="logs-table--header">
      <h2 className="panel-title">Logs</h2>
    </div>
    <div className="logs-table--panel fancy-scroll--kapacitor">
      {logs.length
        ? <InfiniteScroll
            className="logs-table"
            itemHeight={87}
            items={logs.map((log, i) =>
              <LogsTableRow
                key={log.key}
                logItem={log}
                index={i}
                onToggleExpandLog={onToggleExpandLog}
              />
            )}
          />
        : <div className="page-spinner" />}
    </div>
  </div>

const {arrayOf, func, shape, string} = PropTypes

LogsTable.propTypes = {
  logs: arrayOf(
    shape({
      key: string.isRequired,
      ts: string.isRequired,
      lvl: string.isRequired,
      msg: string.isRequired,
    })
  ).isRequired,
  onToggleExpandLog: func.isRequired,
}

export default LogsTable
