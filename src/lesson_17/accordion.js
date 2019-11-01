export class Accordion {
  constructor(rootelement, options) {}

  render() {}

  collapse() {}

  expand() {}
}

new Accordion(document.querySelector('body'), [
  {
    title: '<h2>Section 1</h2>',
    content: `
      Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui
      <ul>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ul>
     `,
  },
  {
    title: '<h2>Section 2</h2>',
    content: `
      Hello section 2      <ul>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ul>
     `,
  },
  {
    title: '<h4><i>Section 3<i></h4>',
    content: `
      Hello section 2      
      <ul>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ul>
     `,
  },
]);
