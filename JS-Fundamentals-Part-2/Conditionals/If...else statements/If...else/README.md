# A real example

To <em>better understand</em> this <strong>syntax</strong>, let's consider a real <em>example.</em>

Imagine a child being asked for help with a chore by their mother or father. The parent might say <em>"Hey sweetheart! If you help me by going and doing the shopping, I'll give you some extra allowance so you can afford that toy you wanted."</em> 

In <strong>JavaScript</strong>, we could represent this like so:</em>

    let shoppingDone = false;
    let childsAllowance;

    if (shoppingDone === true) {
      childsAllowance = 10;
    } else {
      childsAllowance = 5;
    }

This <strong>code</strong> as shown always <strong>results</strong> in the `shoppingDone` <strong>variable</strong> returning `false`, meaning disappointment for our poor child. It'd be up to us to provide a mechanism for the parent to set the `shoppingDone` <strong>variable</strong> to `true` if the child did the shopping.