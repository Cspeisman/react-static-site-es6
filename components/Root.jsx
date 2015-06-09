// components/Root.jsx
import React from 'react';
import Router from 'react-router';
import Header from './Header.jsx';

let RouteHandler = Router.RouteHandler;

export default class Root extends React.Component {
  render() {
    let initialProps = {
      __html: safeStringify(this.props)
    }

    let css = {
      __html: this.props.css
    }
    console.log(this.props)
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={css} />
        </head>
        <body className='p2'>
          <Header />
          <RouteHandler {...this.props} />
          <script
            id="initial-props"
            type="application/json"
            dangerouslySetInnerHTML={initialProps} />
          <script src='bundle.js' />
        </body>
      </html>
    )
  }
}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
