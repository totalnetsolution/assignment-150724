document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('user-form');
    const userList = document.getElementById('user-list');
    let users = [];
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('age').value;
  
      const user = { id: Date.now(), fullName, email, age };
      users.push(user);
      displayUsers();
      form.reset();
    });
  
    function displayUsers() {
      userList.innerHTML = '';
      users.forEach((user) => {
        const userItem = document.createElement('div');
        userItem.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between', 'align-items-center');
        userItem.innerHTML = `
          <div>
            <h5>${user.fullName}</h5>
            <p>Email: ${user.email}</p>
            <p>Age: ${user.age}</p>
          </div>
          <div>
            <button class="btn btn-warning btn-sm me-2" onclick="editUser(${user.id})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
          </div>
        `;
        userList.appendChild(userItem);
      });
    }
  
    window.editUser = (id) => {
      const user = users.find((user) => user.id === id);
      if (user) {
        document.getElementById('fullName').value = user.fullName;
        document.getElementById('email').value = user.email;
        document.getElementById('age').value = user.age;
        deleteUser(id);
      }
    };
  
    window.deleteUser = (id) => {
      users = users.filter((user) => user.id !== id);
      displayUsers();
    };
  });
  