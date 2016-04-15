import applyMiddlewareWithContext from 'applyMiddlewareWithContext'

let exportable = applyMiddlewareWithContext()
exportable.applyMiddlewareWithContext = applyMiddlewareWithContext
export default exportable
