# Contributing to the Developer Experience repository 

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](./CODE-OF-CONDUCT.md).
By participating, you are expected to uphold this code.

## How to Contribute

1. **Fork the repository:**
   - Navigate to this [repository](https://github.com/IntersectMBO/developer-experience)
   - Press the `Fork` button and create a fork of the repository.

2. **Clone the fork:**
- **Terminal**:

    ```shell
     git clone https://github.com/IntersectMBO/developer-experience.git
    ```

- **VS Code**:

  - Open VS Code.

  - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.

  - Type `Git: Clone` and select it.

  - Paste the repository URL: https://github.com/IntersectMBO/developer-experience.git.

  - Choose a directory to save the project.

3. **Navigate to the Project Directory:**
- **Terminal**:

     ```shell
     cd developer-experience
     ```
- **VS Code**:

  - Open the cloned project in VS Code.

  - Use the integrated terminal ( `Hold [Ctrl] + Press [backtick key] `
    or  `Hold [Ctrl] + Press [backtick key]` on macOS) to navigate to the project directory if needed.

4. **Create a Branch for Your Changes:**
 - **Terminal**:

     ```shell
     git checkout -b new-branch-name
     ```
- VS Code:

  - Click the branch name in the bottom-left corner of VS Code.

  - Select `+Create new branch....` / `+Create new branch from...`

  - Enter a branch name (e.g., new-branch-name).

  - Press Enter. 

5. **Work on Your Changes and Push to the Branch:**
- **Terminal**:

     ```shell
     git add .
     git commit -m "short description for the commit"
     git push
     ```

- VS Code:

  - Make your changes in the respective files.

  - Go to the Source Control tab (left sidebar or `Ctrl+Shift+G` / `Cmd+Shift+G` on macOS).

  - Stage your changes by clicking the `+` icon next to each file or the Stage All Changes button.

  - Enter a commit message in the input box and click the checkmark to commit.

  - Click the `...` menu in the Source Control tab and select Push.

6. **Make a pull request:**
   - Once your changes are pushed, open a Pull Request (PR) from your forked repository to the main repository.

   - Go to your forked repository page on GitHub.
   - Click the `New Pull Request` button.
   - Select your branch and provide a clear description of your changes.
   - Submit the PR for review.

7. **Follow the Review Process**

   - Your PR will be reviewed by the [CODEOWNERS](./CODEOWNERS) of the project. You may be asked to make changes or improvements before your contribution is merged. Please be patient and responsive to any feedback.


