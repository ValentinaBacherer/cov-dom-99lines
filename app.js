// first declarations
const friends = ['Joe', 'Clara', 'Ana', 'Ella', 'Andrea'];
const button = document.createElement('button');
const buttonText = document.createTextNode('Sing 🎵!');
button.appendChild(buttonText);

const handleClick = () => {
  for (friend of friends) {
    // create div class friend
    const div = document.createElement('div');
    div.className = 'friend';

    // h3 with friend name
    const h3 = document.createElement('h3');
    const h3Text = document.createTextNode(friend);
    h3.appendChild(h3Text);
    div.appendChild(h3);

    // a paragraph for each line in friend div
    for (let i = 10; i > 0; i--) {
      const p = document.createElement('p');
      let pText = null;

      switch (i) {
        case 1:
          pText = document.createTextNode(
            `1 line of code in the file, ${friend} strikes one out, no more lines🎉!.`
          );
          break;
        case 2:
          pText = document.createTextNode(
            `2 lines of code in the file, ${friend} strikes one out, 1 more line.`
          );
          break;
        default:
          pText = document.createTextNode(
            `${i} lines of code in the file, ${friend} strikes one out, ${
              i - 1
            } more lines.`
          );
          break;
      }

      p.appendChild(pText);
      div.appendChild(p);
    }
    document.body.appendChild(div);
  }
};
// here DOM insertions
document.body.appendChild(button);
button.addEventListener('click', handleClick);
