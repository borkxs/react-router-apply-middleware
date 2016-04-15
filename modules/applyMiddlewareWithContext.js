import React, { cloneElement } from 'react'
import RouterContext from 'react-router/lib/RouterContext'

export default (Context = RouterContext) => (
  (...middleware) => (
    ((createElement) => (
      middleware.filter(m => m.renderRootContainer).reduceRight(
        (previous, { renderRootContainer }) => (
          (renderProps) => (
            cloneElement(
              renderRootContainer(renderProps),
              { render: previous }
            )
          )
        ), (renderProps) => (
          <Context {...renderProps} createElement={createElement}/>
        )
      )
    ))(middleware.filter(m => m.renderContainer).reduceRight(
      (previous, { renderContainer }) => (
        (RouteComponent, props) => (
          cloneElement(
            renderContainer(RouteComponent, props),
            { createElement: previous }
          )
        )
      ), (Component, props) => <Component {...props}/>
    ))
  )
)
