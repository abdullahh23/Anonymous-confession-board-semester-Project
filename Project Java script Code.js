
    function addConfession() {
      const input = document.getElementById('confession-text');
      const text = input.value;


      const list = document.getElementById('confession-list');
      const box = document.createElement('div');
      box.className = 'confession-item';

      const content = document.createElement('p');
      content.textContent = text;
      box.appendChild(content);

      let likes = 0;
      let dislikes = 0;

      const voteDiv = document.createElement('div');
      voteDiv.className = 'vote-buttons';

      const likeBtn = document.createElement('button');
      likeBtn.textContent = `👍 ${likes}`;
      likeBtn.onclick = () => {
        likes++;
        likeBtn.textContent = `👍 ${likes}`;
        likeBtn.disabled = true;
        dislikeBtn.disabled = true;
      };

      const dislikeBtn = document.createElement('button');
      dislikeBtn.textContent = `👎 ${dislikes}`;
      dislikeBtn.onclick = () => {
        dislikes++;
        dislikeBtn.textContent = `👎 ${dislikes}`;
        dislikeBtn.disabled = true;
        likeBtn.disabled = true;
      };

      voteDiv.appendChild(likeBtn);
      voteDiv.appendChild(dislikeBtn);

      box.appendChild(voteDiv);
      list.prepend(box);
      input.value = '';
    }
 