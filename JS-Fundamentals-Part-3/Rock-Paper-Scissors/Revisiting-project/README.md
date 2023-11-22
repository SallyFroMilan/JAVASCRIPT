# Revisiting Rock Paper Scissors

Now that we can *manipulate the **DOM***, it’s time to revisit **Rock Paper Scissors** and **add a simple UI** to it.

Before you start making changes to your Rock Paper Scissors project, you need to learn about a concept in **Git** called **branching** so that you can make your changes without having to worry about breaking what you have now.

Branches in **Git** allow your repository to hold *multiple alternate reality* versions of your files at the same time. You’ve actually (sort of) been using branches since you made your first commit, you just might not have known it! Back in the setting up Git lesson when you ran `git config --global init.defaultBranch main`
you were setting the name of what’s called the default branch for your repos. The default branch is just what we call the branch that is created when you make your first commit on a project, and in that command we set the name to be `main` as is the current standard.

Like the branches in a tree (hence the name), all of the branches for a project stem off of a “trunk” (the `main` branch) or off of other branches.

When you make commits on a specific branch, *those changes only exist on **that** branch*, leaving all of your other branches exactly as they were when you branched off of them.

This means that you can keep: 

<ul>
<li><strong><code>main</code> branch</strong> as a place for only <strong>finished features</strong> that you know are working properly</li>

<li><strong>feature branches</strong> as <strong>dedicated branches</strong> where to add each feature to your project</li>
</ul>

## Using branches

- You can make new branches by using the command git branch `<branch_name>`. 

- You can then change to your new branch using git checkout `<branch_name>`.

- You can also create a new branch and change to it in a single command by using the `-b` flag with `checkout`, in the form `git checkout -b <branch_name>`.

- You can see all of your current branches using `git branch` with no other arguments. The branch that you’re currently on will be indicated with an asterisk. If you want to change back to `main` from any other branch, you can do so just like changing to any other branch using `git checkout main`.

Once you are done working on your feature branch and are ready to bring the commits that you’ve made on it to your main branch, you will need to perform what is known as a `merge`.

Merges are done by using the command `git merge <branch_name>` which will take the changes you’ve committed in `branch_name` and add them to the branch that you’re currently on.

Sometimes, the same lines in a file will have been changed by two different branches. When this happens, you will have a merge conflict when you try and merge those branches together. In order to finish merging the branches you will have to first resolve the conflict, which will be covered in a future lesson.

When you don’t need a branch anymore, it can be deleted using `git branch -d <branch_name>` if the branch has already been merged into `main`, or with `git branch -D <branch_name>` if it hasn’t. You will usually want to delete branches when you’re done with them, otherwise they can pile up and make it more difficult to find the branch you’re looking for when you need it.

## Sharing code

Another great use case for branches is to share code with others that you might not want to commit to your main branch (or feature branch) at all.

For example: if you have a bug in a new feature you’re working on that you can’t figure out, and it causes your code to break, you don’t want to commit that broken code and have it in your project’s “permanent record”. You could instead create a new temporary branch, switch to it and commit your code to this new branch. If you then push this new temporary branch to **GitHub** you can share it with others that may be able to help solve your problem. In the assignment below you will get some hands-on practice on making new branches.






