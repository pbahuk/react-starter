// Writing Pure React here.
const App = () => {
  return React.createElement(
    'div',
    {},
    [
      React.createElement('h1', {}, 'Adopt Me'),
      React.createElement('h2', {}, 'Please')
    ]
  );
}
ReactDOM.render(React.createElement(App), document.getElementById('root'));