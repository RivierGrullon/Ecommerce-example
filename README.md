# Dropship 

Example project using Hydrogen and Model-View-Presenter(MVP) architecture.

#### Project Structure
```
- src
  - components # atomic design base structure
    - atoms
    - molecules
    - organisms
    - template
  - models # all bussiness logic
    - api
    - interactions
    - state
    - types
  - pages # pages that are being 
    - home.server.js
  - App.server.js
```

#### Git Flow
On this project is being use the following gitflow for rapid development so basically to create any feature we create a branch like <b>feat/button</b> from <b>main</b>.

After all the change are completed on the branch <b>feat/button</b> we create a <a href="https://github.com/RivierGrullon/Ecommerce-example/compare">Pull Request</a> to <b>main</b> where other developers can review our code.

After this is done we upload the changes with a merge to <b>main</b> and delete the current feacture or fix branch.

#### Desing
We are using <a href="https://dribbble.com/shots/14038649-Dropship-Dashboard-Exploration">this desing</a> created by <a href="https://dribbble.com/milliarta">Happy Tri Milliarta</a>
