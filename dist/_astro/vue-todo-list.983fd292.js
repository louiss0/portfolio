import{c as n,r as s,m as o,u as i}from"./internal.17261cf6.js";import"./iconify.a2955842.js";import"./runtime-core.esm-bundler.7b7397f2.js";import"./_plugin-vue_export-helper.c27b6911.js";const t=`<h2 id="overview">Overview</h2>
<p>The app allows the user to use both keyboards and clicking to do all most interactions.\r
It shows the user what items are complete incomplete and all of them.\r
It has screen reader text for screen readers.\r
It makes sure the user has to at least type three letters in order to add an item to the list.\r
It uses the <code>ConstraintValidation</code> API in order to make sure the user types in the right information.\r
The information that is required is displayed at the bottom of the text when the user types.\r
The user can submit the form by clicking on a plus icon.\r
The plus icon is an icon that makes the user submit the form.\r
The user can check of an and edit an item by either clicking on\r
the text to edit it or focus on it to edit it.\r
When they do they can then edit the text by using an input to do so.\r
If the input is empty the original text is then put back but if the text is not empty then it is used to edit the list.\r
The user can add as much Items as he or she wants to the list.</p>
<p>There are three buttons the user can use to filter the list.\r
A Show All button to show all item in the list.\r
A Show Completed Button to show all of the completed Items.\r
A Show Incomplete button to show all of the items it the list that is incomplete. These three buttons are unique in color.</p>
<p>The stats are displayed below all of the items. The user knows all of the items that are in the list The ones that are completed and the ones that aren’t.\r
They are instantly calculated when the list is changed and even when the filter is changed.</p>
<h2 id="internals">Internals</h2>
<p>The app is a communication between three components.\r
The <code>TodoListContainer</code> the <code>TodoListForm</code> and the <code>TodoItem</code>.\r
The task is presented by a class called the <code>Task</code> class.\r
The task class has three fields. Id which is a symbol that is automatically created for each instance of the class.\r
The text field which is a string that has to be sent into the class when it is created.\r
The final field is the completed field it has a default value of <code>false</code>. The <code>TodoListContainer</code> is what controls where each\r
task is stored and is the parent component to the <code>TodoItem</code> and the <code>TodoForm</code>.</p>
<h3 id="the-todo-list-container">The Todo List Container</h3>
<p>The Todo list container holds any tasks that would be created and derives the incomplete and complete tasks from tasks that are put inside of the containers state.\r
The total number of tasks, completed tasks, and incomplete tasks are computed from those.\r
It has four areas from top to bottom.\r
The first and top area is where the to do list form lives.\r
The second area is where all of the buttons used to filter the list of tasks live.\r
The third area is where the container of all of the tasks lives.\r
The bottom area is where the stats for all of the tasks live.</p>
<p>It watches over the task list and it puts any of the tasks inside of local storage.\r
It also holds a state called the filter state.\r
The filter state shows determines which tasks must be displayed by. It can only be three words all, completed, and incomplete. A computed value is used to access the derived values of the</p>
<h3 id="the-todo-list-form">The Todo List Form</h3>
<p>The to do list form component is a form element. That holds an\r
input on the left and a button on the right.\r
The input is the one that is used to make the user type in the text needed for a task to be created.\r
The only state that the form holds is the text state. It holds a reference to the input element.</p>
<p>The input element has the validity state attribute inside of it.\r
Which is on object that holds something called the validation message. The validation message is used in the template.\r
When the user types in a message the validation message will show what the user is missing and will guide them on how to fill out the input.\r
The user cannot submit the form until each condition is fulfilled. The user is only allowed to type in only a minimum of three characters and a max of 25 characters.\r
I set the <code>minlength=</code> attribute to <code>3</code> and the <code>maxlength=</code> one to 25. and placed the required attribute on the form. When the user first sees the form it will say that the input is required.</p>
<p>The button on the right is a button that is available for the user to click on when the user clicks on that button or presses enter it will then be used to submit the form. The form has uses the <code>.prevent</code> modifier to make sure the form does not use it’s default behavior. If the validations are successful An event called <code>sendTask</code> is then emitted to the <code>TodoListContainer</code> with the newly created task. The <code>TodoListContainer</code> will then take the newly created task and store it it state.</p>
<h3 id="the-todo-item">The Todo Item</h3>
<p>The todo item is an item that contains two states the <code>editingState</code> and the <code>inputText</code>. It takes in three props <code>id</code>, <code>completed</code>, <code>text</code> all are required.</p>
<ul>
<li>
<p>The <code>id</code> is a symbol like the task id</p>
</li>
<li>
<p>The <code>text</code> is a string like the task string</p>
</li>
<li>
<p>The <code>completed</code> is a boolean like the task completed</p>
</li>
<li>
<p>It also emits three events</p>
<ul>
<li>The <code>checked</code> event which sends an id and a reverse completed boolean state to the <code>TodoListContainer</code>.</li>
<li>The <code>edited</code> event which sends and id and the text to the parent</li>
<li>The <code>deleted</code> event which sends the id to the parent.</li>
</ul>
</li>
</ul>
<p>When the <code>checked</code> event is emitted the parent then takes the id and the completed attribute and uses the id to change the Task item’s completed value to the one that is sent by the <code>TodoItem</code>. When the <code>edited</code> event is emitted the parent then takes the id that was sent and uses it to change the text of the one with the same id as the text that was sent. When the <code>delete</code> event is emitted the parent then uses the id that is sent to get rid of the task with the id that was sent.</p>
<p>The <code>TodoItem</code> component manages the state by using a string with three values.</p>
<ul>
<li><code>not-editing</code> the value that is present when the user is not editing the form anymore</li>
<li><code>editing</code> the value that is used when the user is editing the form</li>
<li><code>edited</code> the value that is used when the user is done with editing the form.</li>
</ul>
<p>A <code>watchEffect</code> is used to watch over the <code>editingState</code> when it’s value is set to <code>not-editing</code> it check to see if the input is empty. If it is then the input’s value will be set to the value of the text prop. If not then things will go through. If the editing state is set to edited. The <code>editing</code> event will be emitted then after 200 milliseconds the <code>editingState</code> will be set to <code>not-editing</code>.</p>
<p>The <code>TodoItem</code> has three elements inside of it. To the left is the button with a check icon inside of it and screen reader text that says check. An element in the middle that holds a label on the top and an input at the bottom. The label is screen readers only. On the right is the button with a trash icon inside of it. By default the input does not appear. Instead a button with text in front of it appears the text is the text that is supposed to be passed in by the <code>TodoListContainer</code>. The user simply clicks on the button to make the text input appear.</p>
<p>When the user is done editing the form a message will appear that will say <em>Editing successful</em>. After that the editing event is emitted to the parent and it will update the text with the new text if the text is new.</p>`,h={title:"Vue Todo List",type:"Web App",description:"This app is a simple to do list app that allows the user to type in a message.",image:"/src/assets/Vue-3-To-do-List.png",url:"https://vue3-first-todo-list.vercel.app",pubDate:"2023-01-01",stack:"Astro Vue",client:"Self",tags:["vue"]},a="/home/louiss/main/web-projects/monorepo/personal-projects/apps/portfolio/src/content/project/vue-todo-list.md",r=void 0;function w(){return`\r
## Overview\r
\r
The app allows the user to use both keyboards and clicking to do all most interactions.\r
 It shows the user what items are complete incomplete and all of them.\r
It has screen reader text for screen readers.\r
 It makes sure the user has to at least type three letters in order to add an item to the list.\r
It uses the \`ConstraintValidation\` API in order to make sure the user types in the right information.\r
 The information that is required is displayed at the bottom of the text when the user types.\r
  The user can submit the form by clicking on a plus icon.\r
   The plus icon is an icon that makes the user submit the form.\r
The user can check of an and edit an item by either clicking on\r
the text to edit it or focus on it to edit it.\r
 When they do they can then edit the text by using an input to do so.\r
If the input is empty the original text is then put back but if the text is not empty then it is used to edit the list.\r
The user can add as much Items as he or she wants to the list.\r
\r
There are three buttons the user can use to filter the list.\r
A Show All button to show all item in the list.\r
A Show Completed Button to show all of the completed Items.\r
A Show Incomplete button to show all of the items it the list that is incomplete. These three buttons are unique in color.\r
\r
The stats are displayed below all of the items. The user knows all of the items that are in the list The ones that are completed and the ones that aren't.\r
They are instantly calculated when the list is changed and even when the filter is changed.\r
\r
## Internals\r
\r
The app is a communication between three components.\r
The \`TodoListContainer\` the \`TodoListForm\` and the \`TodoItem\`.\r
The task is presented by a class called the \`Task\` class.\r
The task class has three fields. Id which is a symbol that is automatically created for each instance of the class.\r
The text field which is a string that has to be sent into the class when it is created.\r
The final field is the completed field it has a default value of \`false\`. The \`TodoListContainer\` is what controls where each\r
task is stored and is the parent component to the \`TodoItem\` and the \`TodoForm\`.\r
\r
### The Todo List Container\r
\r
The Todo list container holds any tasks that would be created and derives the incomplete and complete tasks from tasks that are put inside of the containers state.\r
The total number of tasks, completed tasks, and incomplete tasks are computed from those.\r
It has four areas from top to bottom.\r
The first and top area is where the to do list form lives.\r
The second area is where all of the buttons used to filter the list of tasks live.\r
The third area is where the container of all of the tasks lives.\r
The bottom area is where the stats for all of the tasks live.\r
\r
It watches over the task list and it puts any of the tasks inside of local storage.\r
It also holds a state called the filter state.\r
The filter state shows determines which tasks must be displayed by. It can only be three words all, completed, and incomplete. A computed value is used to access the derived values of the\r
\r
### The Todo List Form\r
\r
The to do list form component is a form element. That holds an\r
input on the left and a button on the right.\r
The input is the one that is used to make the user type in the text needed for a task to be created.\r
The only state that the form holds is the text state. It holds a reference to the input element.\r
\r
The input element has the validity state attribute inside of it.\r
Which is on object that holds something called the validation message. The validation message is used in the template.\r
When the user types in a message the validation message will show what the user is missing and will guide them on how to fill out the input.\r
The user cannot submit the form until each condition is fulfilled. The user is only allowed to type in only a minimum of three characters and a max of 25 characters.\r
I set the \`minlength=\` attribute to \`3\` and the \`maxlength=\` one to 25. and placed the required attribute on the form. When the user first sees the form it will say that the input is required.\r
\r
The button on the right is a button that is available for the user to click on when the user clicks on that button or presses enter it will then be used to submit the form. The form has uses the \`.prevent\` modifier to make sure the form does not use it's default behavior. If the validations are successful An event called \`sendTask\` is then emitted to the \`TodoListContainer\` with the newly created task. The \`TodoListContainer\` will then take the newly created task and store it it state.\r
\r
### The Todo Item\r
\r
The todo item is an item that contains two states the \`editingState\` and the \`inputText\`. It takes in three props \`id\`, \`completed\`, \`text\` all are required.\r
\r
- The \`id\` is a symbol like the task id\r
- The \`text\` is a string like the task string\r
- The \`completed\` is a boolean like the task completed\r
\r
- It also emits three events\r
\r
  - The \`checked\` event which sends an id and a reverse completed boolean state to the \`TodoListContainer\`.\r
  - The \`edited\` event which sends and id and the text to the parent\r
  - The \`deleted\` event which sends the id to the parent.\r
\r
When the \`checked\` event is emitted the parent then takes the id and the completed attribute and uses the id to change the Task item's completed value to the one that is sent by the \`TodoItem\`. When the \`edited\` event is emitted the parent then takes the id that was sent and uses it to change the text of the one with the same id as the text that was sent. When the \`delete\` event is emitted the parent then uses the id that is sent to get rid of the task with the id that was sent.\r
\r
The \`TodoItem\` component manages the state by using a string with three values.\r
\r
- \`not-editing\` the value that is present when the user is not editing the form anymore\r
- \`editing\` the value that is used when the user is editing the form\r
- \`edited\` the value that is used when the user is done with editing the form.\r
\r
A \`watchEffect\` is used to watch over the \`editingState\` when it's value is set to \`not-editing\` it check to see if the input is empty. If it is then the input's value will be set to the value of the text prop. If not then things will go through. If the editing state is set to edited. The \`editing\` event will be emitted then after 200 milliseconds the \`editingState\` will be set to \`not-editing\`.\r
\r
The \`TodoItem\` has three elements inside of it. To the left is the button with a check icon inside of it and screen reader text that says check. An element in the middle that holds a label on the top and an input at the bottom. The label is screen readers only. On the right is the button with a trash icon inside of it. By default the input does not appear. Instead a button with text in front of it appears the text is the text that is supposed to be passed in by the \`TodoListContainer\`. The user simply clicks on the button to make the text input appear.\r
\r
When the user is done editing the form a message will appear that will say _Editing successful_. After that the editing event is emitted to the parent and it will update the text with the new text if the text is new.\r
`}function b(){return t}function g(){return[{depth:2,slug:"overview",text:"Overview"},{depth:2,slug:"internals",text:"Internals"},{depth:3,slug:"the-todo-list-container",text:"The Todo List Container"},{depth:3,slug:"the-todo-list-form",text:"The Todo List Form"},{depth:3,slug:"the-todo-item",text:"The Todo Item"}]}const k=n((d,l,c)=>{const{layout:u,...e}=h;return e.file=a,e.url=r,s`${o()}${i(t)}`});export{k as Content,b as compiledContent,k as default,a as file,h as frontmatter,g as getHeadings,w as rawContent,r as url};
