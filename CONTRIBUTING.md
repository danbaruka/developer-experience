# Contributing to the Developer Experience repository 

## How to Contribute Using VS Code

1. **Fork the repository:**

    - Navigate to the [repository](https://github.com/IntersectMBO/developer-experience).
    - Click the Fork button to create a fork of the repository.
    - A fork of the repository will be created in your profile, copy that URL.

2. **Clone the Fork:**
    - Open Visual Studio Code.

    - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
    - Type `Git: Clone` and select it.

    - Paste the repository URL: Paste the copied URL from Step 1.
    - Choose a directory to save the project.

3. **Navigate to the Project Directory:**
    - Open the cloned project in VS Code.

    - Use the integrated terminal (Ctrl+`` or Cmd+`` on macOS) if needed.

4. **Create a Branch for Your Changes:**
    - Click the branch name in the bottom-left corner of VS Code.

    - Select `+Create new branch....`

    - Enter a branch name (e.g., new-branch-name).

    - Press Enter.

5. **Work on Your Changes and Push to the Branch:**
    - Make your changes in the respective files.

    - Go to the Source Control tab (`Ctrl+Shift+G` on Windows or `Cmd+Shift+G` on macOS).

    - Stage your changes by clicking the `+` icon next to each file or the "Stage All Changes" button.

    - Enter a commit message in the input box and click the checkmark to commit.

    - Click the `...` menu in the Source Control tab and select Push.

6. **Make a Pull Request:**
    - Go to your forked repository page on GitHub.

    - Click the `New Pull Request` button.

    - Select your branch and provide a clear description of your changes.

    - Submit the PR for review.

7. **Follow the Review Process**

   - Your PR will be reviewed by the [CODEOWNERS](./CODEOWNERS) of the project. You may be asked to make changes or improvements before your contribution is merged. Please be patient and responsive to any feedback.

## How to Contribute Using Terminal

1. **Fork the Repository:**
    - Navigate to the [repository](https://github.com/IntersectMBO/developer-experience).

    - Click the Fork button to create a fork of the repository.

    - A fork of the repository will be created in your profile, copy that URL.

2. **Create a Project Directory and Clone the Fork:**
    - Open a New Terminal in Visual Studio Code.
    - Create your project's root directory using  `mkdir folder-name`and navigate to it using `cd folder-name`. 
    - Run the following command:
    ```shell
     git clone copied-url
    ```

3. **Navigate to the Project Directory:**
    - Run the following command:

    ```shell
     cd developer-experience
     ```
4. **Create a Branch for Your Changes:**
    - Run the following command:
    ```shell
    git checkout -b new-branch-name
    ```
5. **Work on Your Changes and Push to the Branch**
    - Make your changes in the respective files.
    - Stage your changes:
    ```shell
       git add .
    ```
    - Commit your changes:
    ```shell
    git commit -m "short description for the commit"
    ```
    - Push your changes:
    ```shell
    git push
    ```
6. **Make a Pull Request:**
    - Go to your forked repository page on GitHub.
    - Click the `New Pull Request` button.
    - Select your branch and provide a clear description of your changes.
    - Submit the PR for review.

7. **Follow the Review Process**

   - Your PR will be reviewed by the [CODEOWNERS](./CODEOWNERS) of the project. You may be asked to make changes or improvements before your contribution is merged. Please be patient and responsive to any feedback.


This project and everyone participating in it is governed by the [Code of Conduct](./CODE-OF-CONDUCT.md).
By participating, you are expected to uphold this code.