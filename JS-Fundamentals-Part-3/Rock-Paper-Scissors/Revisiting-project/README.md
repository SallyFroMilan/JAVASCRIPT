# Revisiting Rock Paper Scissors

Now that we can manipulate the DOM, it’s time to revisit **Rock Paper Scissors** and add a simple UI to it.

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





