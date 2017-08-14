export const questions = [
  {
    id : 1,
    completed: false,
    selected: false,
    marked: false,
    title : 'What are the three core building blocks of Security and Access in Salesforce?',
    options : [
      {id : 'A', text : 'Profile Restrictions'},
      {id : 'B', text : 'Organization-Wide Defaults'},
      {id : 'C', text : 'Profiles'},
      {id : 'D', text : 'Role Hierarchy'},
      {id : 'E', text : 'Sharing'},
      {id : 'F', text : 'Chatter Groups'}
    ],
    answer : ['B', 'D', 'E'],
    selectedAnswer : []
  },
  {
    id : 2,
    completed: false,
    selected: false,
    marked: false,
    title : 'On which OWD sharing defaults the Sharing Rules can’t be defined?',
    options : [
      {id : 'A', text : 'OWD is Private'},
      {id : 'B', text : 'OWD is Public Read Only' },
      {id : 'C', text : 'OWD is Public Read Write'},
      {id : 'D', text : 'Sharing rules can be created on any of the above'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id : 3,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following cannot be done by a user to records owned by others when the organization wide default is set to Read / Write to an object',
    options : [
      {id : 'A', text : 'Add related records'},
      {id : 'B', text : 'Search Records' },
      {id : 'C', text : 'Delete records'},
      {id : 'D', text : 'Change ownership'},
      {id : 'E', text : 'Report on records'},
      {id : 'F', text : 'Edit details on records'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id : 4,
    completed: false,
    selected: false,
    marked: false,
    title : 'Assume the Organization Wide default sharing is set to private for all objects and no sharing rules have been created. You have two users in the Sales Rep Role; can they view each other\'s data?',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 5,
    completed: false,
    selected: false,
    marked: false,
    title : 'The organization wants users to view the details of the calendar of the accounts and the ability to add events. What should be the OWD for it',
    options : [
      {id : 'A', text : 'Hide details'},
      {id : 'B', text : 'Show details and add events' },
      {id : 'C', text : 'Hide details and add events'},
      {id : 'D', text : 'Add events'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 6,
    completed: false,
    selected: false,
    marked: false,
    title : 'Where does the click path Your Name --> Setup -> Security controls -> Sharing settings lead to?',
    options : [
      {id : 'A', text : 'Custom Profile'},
      {id : 'B', text : 'Organization wide Defaults' },
      {id : 'C', text : 'Trusted IP Ranges'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 7,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can use Sharing Rules to grant wider access to data. You cannot restrict access below your OWD levels.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 8,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following statements is/are true for sharing rules?',
    options : [
      {id : 'A', text : 'Sharing rules should be used when a user or group of users need access to records not granted them by either role hierarchy or organization wide defaults'},
      {id : 'B', text : 'Sharing rules apply only to new records owned by specified role'},
      {id : 'C', text : 'When you transfer records from user to another, the sharing rules are removed during the transfer'},
      {id : 'D', text : 'You cannot change the specified groups or roles for sharing rules'},
    ],
    answer : ['A','D'],
    selectedAnswer : []
  },
  {
    id : 9,
    completed: false,
    selected: false,
    marked: false,
    title : 'Universal Containers needs to allow a group of users to view account records that they do NOT own. Which feature can the system administrator use to meet this requirement?',
    options : [
      {id : 'A', text : 'Field Level Security'},
      {id : 'B', text : 'Account record types' },
      {id : 'C', text : 'Sharing Rules'},
      {id : 'D', text : 'Public groups'},
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id : 10,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which statement about sharing rules is true?',
    options : [
      {id : 'A', text : 'Sharing rules grant read/write or delete access to records'},
      {id : 'B', text : 'Sharing rules are required in public read/write organizations' },
      {id : 'C', text : 'Sharing rules open up access to records'},
      {id : 'D', text : 'Sharing rules grant record access to roles and public groups'},
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id : 11,
    completed: false,
    selected: false,
    marked: false,
    title : 'Criteria-based sharing rules can be created for which objects?',
    options : [
      {id : 'A', text : 'Leads'},
      {id : 'B', text : 'Campaigns' },
      {id : 'C', text : 'Contacts'},
      {id : 'D', text : 'Opportunities'},
      {id : 'E', text : 'Accounts'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id : 12,
    completed: false,
    selected: false,
    marked: false,
    title : 'Can a user restrict access with the help of the sharing rules? ',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 13,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is used for automatically opening records by an administrator when they meet a data Trigger point? ',
    options : [
      {id : 'A', text : 'Manual Sharing'},
      {id : 'B', text : 'Criteria based sharing Rules' },
      {id : 'C', text : 'OWD'},
      {id : 'D', text : 'None of the Above'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 14,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is not true about sharing Rules?',
    options : [
      {id : 'A', text : 'Sharing rules open up access where as org wide defaults restrict access'},
      {id : 'B', text : 'When you delete a sharing rule, the sharing access created by that rule is automatically removed' },
      {id : 'C', text : 'You can edit the access levels for any sharing rule. You can change the specified groups / roles for the rule'},
      {id : 'D', text : 'Sharing rules apply to all new and existing records owned by the specified role / group members'},
      {id : 'E', text : 'When you modify which users are in a group rule, the sharing rules are re-evaluated to add/remove access as necessary.'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id : 15,
    completed: false,
    selected: false,
    marked: false,
    title : 'A particular team needs to track individuals working on cases and the individual roles of the people working on cases. Which is the best way to do it?',
    options : [
      {id : 'A', text : 'Profiles'},
      {id : 'B', text : 'Roles' },
      {id : 'C', text : 'Public groups'},
      {id : 'D', text : 'Sharing rules'},
      {id : 'E', text : 'Permissions'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id : 16,
    completed: false,
    selected: false,
    marked: false,
    title : 'The sales operations team at Universal Containers needs to be able to read, edit, delete and transfer all records owned by sales representatives. How can a system admin meet this requirement?',
    options : [
      {id : 'A', text : 'Add Sales operations users to the default account teams for all sales reps'},
      {id : 'B', text : 'Define a role hierarchy where the sales operations role is above the sales reps role.' },
      {id : 'C', text : 'Create Sharing Rules that gives sales operations access to records owned by sales reps.'},
      {id : 'D', text : 'Manually share all records owned by sales reps with sales operations.'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 17,
    completed: false,
    selected: false,
    marked: false,
    title : 'To minimize the number of sharing rules, use "Roles and Subordinates" over "Roles" where possible.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 18,
    completed: false,
    selected: false,
    marked: false,
    title : 'The Account Access, Contact Access and Opportunity Access options depend on your sharing mode',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 19,
    completed: false,
    selected: false,
    marked: false,
    title : 'Using the following hierarchy, if a sharing rule exists granting Operations Person Read/Write access to Sales Management on the Account Object, what access does Operations Management have to Sales Management\'s accounts? Default access for the Account object is Public Read Only. [Executive Management->Sales Management->Sales Person->Operations Management -> Operations Person]',
    options : [
      {id : 'A', text : 'None'},
      {id : 'B', text : 'Read Only' },
      {id : 'C', text : 'Read/Write'},
      {id : 'D', text : 'Read/Write/Transfer '}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id : 20,
    completed: false,
    selected: false,
    marked: false,
    title : 'What can a user do an account record that has been manually shared read/write with him/her?',
    options : [
      {id : 'A', text : 'View the account'},
      {id : 'B', text : 'Edit the account' },
      {id : 'C', text : 'Transfer the account'},
      {id : 'D', text : 'Delete the account'},
      {id : 'E', text : 'Share it to other users'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id : 21,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is Sharing Rule?',
    options : [
      {id : 'A', text : 'Automated rules that grant access to groups of users'},
      {id : 'B', text : 'Exceptions to OWD' },
      {id : 'C', text : 'Rules given for group of user working closely on a project'},
      {id : 'D', text : 'Irrelevant for Public Read / Write Organizations'}
    ],
    answer : ['A','B','D'],
    selectedAnswer : []
  },
  {
    id : 22,
    completed: false,
    selected: false,
    marked: false,
    title : 'Sharing rules can be established between: [Public Groups,Queues,Roles,Roles and Subordinates]',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 23,
    completed: false,
    selected: false,
    marked: false,
    title : 'You need which permission to specify a running user other than yourself.',
    options : [
      {id : 'A', text : 'View All Data'},
      {id : 'B', text : 'Modify All Data'},
      {id : 'C', text : 'See All Data'},
      {id : 'D', text : 'Change All Data'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 24,
    completed: false,
    selected: false,
    marked: false,
    title : 'Select the user permissions which override field-level security (Select all that apply)',
    options : [
      {id : 'A', text : 'Modify All Data'},
      {id : 'B', text : 'View All Data' },
      {id : 'C', text : 'Configure UI'},
      {id : 'D', text : 'View Encrypted Data'}
    ],
    answer : ['A','B','D'],
    selectedAnswer : []
  },
  {
    id : 25,
    completed: false,
    selected: false,
    marked: false,
    title : 'Sales managers need to view and report on sales revenue across an entire company without having access to a custom object that tracks personal time off requests.Which permission should a system administrator enable in a custom profile to meet this requirement in a private sharing model?',
    options : [
      {id : 'A', text : 'Read for Accounts'},
      {id : 'B', text : 'View All Data' },
      {id : 'C', text : 'Read for Opportunities'},
      {id : 'D', text : 'View All for Opportunities'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 26,
    completed: false,
    selected: false,
    marked: false,
    title : 'Universal container has a private sharing model in which region sales manager are only allow to view opportunities in their own regions.For reporting purposes,they additionally need read-only access to opportunities in other regions. What permission can a system administrator enable to meet this requirement in the regional sales managers customer profile?',
    options : [
      {id : 'A', text : '“visible” for the sales app'},
      {id : 'B', text : '“view all” for opportunities' },
      {id : 'C', text : '“view all data”'},
      {id : 'D', text : '“Read” for opportunities'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 27,
    completed: false,
    selected: false,
    marked: false,
    title : 'Even a user with "View all data" (VAD) permission cannot view hidden folders as well as folders shared to no one.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 28,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following profile permissions will enables the User to edit any record, regardless of the Sharing Model?',
    options : [
      {id : 'A', text : 'Customize Application'},
      {id : 'B', text : 'View Setup and Configuration' },
      {id : 'C', text : 'View All Data'},
      {id : 'D', text : 'Modify All Data'},
      {id : 'E', text : 'None of the Above'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id : 29,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which function can be performed using enhanced profile management?',
    options : [
      {id : 'A', text : 'Merge profiles'},
      {id : 'B', text : 'Make mass permission modifications across multiple profiles'},
      {id : 'C', text : 'Make mass profile changes'},
      {id : 'D', text : 'Edit profile permissions directly in a list view'}
    ],
    answer : ['B','D'],
    selectedAnswer : []
  },
  {
    id : 30,
    completed: false,
    selected: false,
    marked: false,
    title : 'How many profiles can load in a single list view with Enhanced Profile Management enabled?',
    options : [
      {id : 'A', text : '5'},
      {id : 'B', text : '10' },
      {id : 'C', text : '50'},
      {id : 'D', text : '100'},
      {id : 'E', text : '200'}
    ],
    answer : ['E'],
    selectedAnswer : []
  },
  {
    id : 31,
    completed: false,
    selected: false,
    marked: false,
    title : 'What should a system administrator use to disable access to a custom application for a group of users?',
    options : [
      {id : 'A', text : 'Profiles'},
      {id : 'B', text : 'Sharing rules' },
      {id : 'C', text : 'Web tabs'},
      {id : 'D', text : 'Page layouts'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 32,
    completed: false,
    selected: false,
    marked: false,
    title : 'A system administrator at Universal Containers created a custom object to capture custom feedback. How can the administrator ensure that users have access to this new object?',
    options : [
      {id : 'A', text : 'Add fields from the feedback object to the account page layout'},
      {id : 'B', text : 'Create a lookup relationship from the account page to the feedback object' },
      {id : 'C', text : 'Assign the feedback page layout to the appropriate user profiles'},
      {id : 'D', text : 'Create a role in the hierarchy to provide user access to the new object'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id : 33,
    completed: false,
    selected: false,
    marked: false,
    title : 'What action can a user with the standard system administrator profile take?',
    options : [
      {id : 'A', text : 'Access a log of the records a user has viewed'},
      {id : 'B', text : 'Delete user records' },
      {id : 'C', text : 'Reset all user passwords'},
      {id : 'D', text : 'Assign feature licenses to users'},
      {id : 'E', text : 'Define and assign custom profiles to users'}
    ],
    answer : ['C','D','E'],
    selectedAnswer : []
  },
  {
    id : 34,
    completed: false,
    selected: false,
    marked: false,
    title : 'What must an administrator do when creating a record type?',
    options : [
      {id : 'A', text : 'Set the field level security for the record type'},
      {id : 'B', text : 'Create a new page layout for the record type' },
      {id : 'C', text : 'Assign the record type to the appropriate profiles'},
      {id : 'D', text : 'Add the record type to the required user records'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id : 35,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is the click path to enable Enhance Profile Management?',
    options : [
      {id : 'A', text : 'Setup | Customize | User Interface'},
      {id : 'B', text : 'Setup | Manage Users | Profiles' },
      {id : 'C', text : 'Setup | Profiles | Customize'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 36,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which Salesforce editions provide option for customizing profiles?',
    options : [
      {id : 'A', text : 'All Editions'},
      {id : 'B', text : 'Unlimited, Developer and Enterprise Editions' },
      {id : 'C', text : 'Professional, Unlimited, and Developer Editions'},
      {id : 'D', text : 'All except Group Edition'},
      {id : 'E', text : 'All except Professional Edition'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 37,
    completed: false,
    selected: false,
    marked: false,
    title : 'Every profile, including profiles associated with Customer Portal users must have at least one visible app.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 38,
    completed: false,
    selected: false,
    marked: false,
    title : 'Enterprise, Developer and Unlimited System Administrators can create an unlimited number of Custom Profiles from scratch.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 39,
    completed: false,
    selected: false,
    marked: false,
    title : 'As a system administrator you can create page layout in the console and assign it to profiles.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 40,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which administrative permissions are necessary in order to edit profiles?',
    options : [
      {id : 'A', text : 'Manage Users and Customize Application'},
      {id : 'B', text : 'View Setup and Configuration, Manage Users and Customize Application' },
      {id : 'C', text : 'View Setup and Configuration, Manage Users and Manage Profiles'},
      {id : 'D', text : 'Manage Profiles and Manage Users'},
      {id : 'E', text : 'View User Configuration, and Manage Users'},
      {id : 'F', text : 'View setup and Configuration, View User Configuration, Manage Users and Manage Profiles'},
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 41,
    completed: false,
    selected: false,
    marked: false,
    title : 'What does a profile control?',
    options : [
      {id : 'A', text : 'Tasks that users can perform on records they access'},
      {id : 'B', text : 'Relationship between two objects' },
      {id : 'C', text : 'View of records that users access'},
      {id : 'D', text : 'Fields available for view in related lists'}
    ],
    answer : ['A','C'],
    selectedAnswer : []
  },
  {
    id : 42,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is not part of the Profile?',
    options : [
      {id : 'A', text : 'User License'},
      {id : 'B', text : 'Page Layout' },
      {id : 'C', text : 'Record Types'},
      {id : 'D', text : 'Field Level Security'},
      {id : 'E', text : 'Roles'}
    ],
    answer : ['E'],
    selectedAnswer : []
  },
  {
    id : 43,
    completed: false,
    selected: false,
    marked: false,
    title : 'What information does the Company Profile Hold?',
    options : [
      {id : 'A', text : 'Language, Locale, and Time Zone'},
      {id : 'B', text : 'Licenses, Storage and Used Space' },
      {id : 'C', text : 'Fiscal Year'},
      {id : 'D', text : 'Forecasting'},
      {id : 'E', text : 'None of the above'}
    ],
    answer : ['A','B','C'],
    selectedAnswer : []
  },
  {
    id : 44,
    completed: false,
    selected: false,
    marked: false,
    title : 'What information may be updated on the Company Profile?',
    options : [
      {id : 'A', text : 'Language, Locale, and Time Zone'},
      {id : 'B', text : 'Fiscal Year' },
      {id : 'C', text : 'Primary Contact and Address Information'},
      {id : 'D', text : 'Forecasting'},
      {id : 'E', text : 'All of the above'}
    ],
    answer : ['A','B','C'],
    selectedAnswer : []
  },
  {
    id : 45,
    completed: false,
    selected: false,
    marked: false,
    title : 'What does a Profile Control?',
    options : [
      {id : 'A', text : 'Access to Application'},
      {id : 'B', text : 'Record Type Access' },
      {id : 'C', text : 'Permissions'},
      {id : 'D', text : 'Data Visibility'},
      {id : 'E', text : 'Hours and IP Address'}
    ],
    answer : ['A','B','C','E'],
    selectedAnswer : []
  },
  {
    id : 46,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is not found on a Company Profile?',
    options : [
      {id : 'A', text : 'Language, Locale, and Time Zone'},
      {id : 'B', text : 'Profiles' },
      {id : 'C', text : 'Licenses'},
      {id : 'D', text : 'Storage and Used Space'},
      {id : 'E', text : 'Manage Currencies'},
      {id : 'F', text : 'Fiscal Years'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 47,
    completed: false,
    selected: false,
    marked: false,
    title : 'A Profile is a collection of settings and permissions that determine what the user can do with records they have access to and how they view those records.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id : 48,
    completed: false,
    selected: false,
    marked: false,
    title : 'A System Administrator can edit a profile to:',
    options : [
      {id : 'A', text : 'Prevent a user from viewing custom tabs'},
      {id : 'B', text : 'Prevent the use of Mass email' },
      {id : 'C', text : 'Deny a user access to other users leads'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id : 49,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following does a Profile control?',
    options : [
      {id : 'A', text : 'Username and Password'},
      {id : 'B', text : 'Role level access' },
      {id : 'C', text : 'Read, Create, Edit, and Delete permissions'},
      {id : 'D', text : 'Sharing rules'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id : 50,
    completed: false,
    selected: false,
    marked: false,
    title : 'If a profile does not have access to an application, that profile will also not have access to the tabs and objects of that application',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 51,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is the difference between the Marketing User Profile and the Marketing User checkbox at the User level?',
    options : [
      {id : 'A', text : 'They are the same thing'},
      {id : 'B', text : 'Marketing User Profile allows users to create and edit Campaigns, Marketing User checkbox allows users to import Leads.' },
      {id : 'C', text : 'Marketing User Profile allows users to import Leads. Marketing User checkbox allows users to create and edit Campaigns.'},
      {id : 'D', text : 'None of the Above'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id : 52,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is a standard Profile',
    options : [
      {id : 'A', text : 'Sales User'},
      {id : 'B', text : 'Marketing User' },
      {id : 'C', text : 'Invoice Manager'},
      {id : 'D', text : 'Contract Manager'}
    ],
    answer : ['B','D'],
    selectedAnswer : []
  },
  {
    id:53,
    completed: false,
    selected: false,
    marked: false,
    title : 'A Profile can have many users, but a user can have only one profile.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:54,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can then associate each business process with one / more record types and make it available to users based on their',
    options : [
      {id : 'A', text : 'Role'},
      {id : 'B', text : 'Profile' },
      {id : 'C', text : 'OWD'},
      {id : 'D', text : 'License Type'},
      {id : 'E', text : 'Salesforce Edition'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id:55,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can customize to restrict users ability to log in to salesforce.',
    options : [
      {id : 'A', text : 'Profile'},
      {id : 'B', text : 'Role' },
      {id : 'C', text : 'Page Layout'},
      {id : 'D', text : 'Record Type'},
      {id : 'E', text : 'Security Settings'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:56,
    completed: false,
    selected: false,
    marked: false,
    title : 'If Phil is promoted from a Sales Associate to Senior Sales Exec, and the new sales associate is appointed to take Phil\'s responsibilities. What are the appropriate steps to transfer Phil\'s account to the new associate?',
    options : [
      {id : 'A', text : 'Overwrite Phil\'s User Profile with the new associates information and create a new profile for Phil.'},
      {id : 'B', text : 'Create a new profile for Phil as well as new associate. Deactivate Phil\'s profile with Sales Associate role and transfer all the accounts, opportunities and leads to the new associate.' },
      {id : 'C', text : 'Associate the new role to Phil\'s existing profile and Transfer all the accounts, opportunities and leads to the new associate.'},
      {id : 'D', text : 'None of the above'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id :57,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can update licenses on the Company Profile.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 58,
    completed: false,
    selected: false,
    marked: false,
    title : 'How does a Profile differ from a Role',
    options : [
      {id : 'A', text : 'Profile controls what a user can do (read, create, edit, delete) with records'},
      {id : 'B', text : 'Profile controls what a user can do (read) with records' },
      {id : 'C', text : 'Profile controls what a user can do (read, create) with records'},
      {id : 'D', text : 'Profile controls what a user can do (read, create, edit) with records'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:59,
    completed: false,
    selected: false,
    marked: false,
    title : 'Define the Standard User profile.',
    options : [
      {id : 'A', text : 'Can view, edit, delete their own records'},
      {id : 'B', text : 'Can view their own records' },
      {id : 'C', text : 'Can edit, delete their own records'},
      {id : 'D', text : 'Can delete their own records'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:60,
    completed: false,
    selected: false,
    marked: false,
    title : 'Define the Solution Manager Profile.',
    options : [
      {id : 'A', text : 'Standard user permission'},
      {id : 'B', text : 'Can manager solutions & solution categories' },
      {id : 'C', text : 'Can view solutions & solution categories'},
      {id : 'D', text : 'Can edit solutions & solution categories'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:61,
    completed: false,
    selected: false,
    marked: false,
    title : 'Define the Contract Manager profile.',
    options : [
      {id : 'A', text : 'Standard user permission'},
      {id : 'B', text : 'edit and delete contracts' },
      {id : 'C', text : 'approve and activate contracts'},
      {id : 'D', text : 'edit, approve, activate, and delete contracts'}
    ],
    answer : ['A','D'],
    selectedAnswer : []
  },
  {
    id:62,
    completed: false,
    selected: false,
    marked: false,
    title : 'Define the Marketing User Profile.',
    options : [
      {id : 'A', text : 'Standard user permission'},
      {id : 'B', text : 'edit, approve, activate, and delete contracts' },
      {id : 'C', text : 'can import leads for the Org'},
      {id : 'D', text : 'Can edit solutions & solution categories'},
      {id : 'E', text : 'Accounts'}
    ],
    answer : ['A','C'],
    selectedAnswer : []
  },
  {
    id:63,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of them is NOT a Profile Component. Select all which are applicable',
    options : [
      {id : 'A', text : 'Access to Applications'},
      {id : 'B', text : 'Tab Visibility' },
      {id : 'C', text : 'Page layouts'},
      {id : 'D', text : 'Field-Level Security'},
      {id : 'E', text : 'Record Types Access'},
      {id : 'F', text : 'Permissions'},
      {id : 'G', text : 'Manage Currencies'},
      {id : 'H', text : 'Hours and IP addresses'},
      {id : 'I', text : 'Tag Settings'},
      {id : 'J', text : 'UI Settings'}
    ],
    answer : ['G','I','J'],
    selectedAnswer : []
  },
  {
    id:64,
    completed: false,
    selected: false,
    marked: false,
    title : 'A particular role needs edit on contacts, view, edit and delete on contracts and only view on accounts. Where can the administrator make the change?',
    options : [
      {id : 'A', text : 'User record'},
      {id : 'B', text : 'Profile' },
      {id : 'C', text : 'Organization wide default'},
      {id : 'D', text : 'Sharing rule'},
      {id : 'E', text : 'Public group'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:65,
    completed: false,
    selected: false,
    marked: false,
    title : 'A sales user wants to have edit access to opportunity but should not be able to import leads and should also be able delete accounts. Is it possible?',
    options : [
      {id : 'A', text : 'Yes (customize a standard profile)'},
      {id : 'B', text : 'Yes (customize a custom profile)' },
      {id : 'C', text : 'No (as importing leads cannot be disabled)'},
      {id : 'D', text : 'No (accounts can never be deleted)'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:66,
    completed: false,
    selected: false,
    marked: false,
    title : 'Sales User is a standard profile',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:67,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is true if you remove the "Read" permission from a user profile for a standard object?',
    options : [
      {id : 'A', text : 'Tabs of that object type will be visible, Fields of that type will not be visible on other tabs, related lists of that type will be visible on other tabs, search results will not return records of that type, report data for records of that type will not be available, merge fields of that type will not be available, and custom links of that type will not be visible'},
      {id : 'B', text : 'Tabs of that object type will not be visible, Fields of that type will not be visible on other tabs, related lists of that type will not be visible on other tabs, search results will not return records of that type, report data for records of that type will not be available, merge fields of that type will not be available, and custom links of that type will not be visible' },
      {id : 'C', text : 'Tabs of that object type will not be visible, Fields of that type will be visible on other tabs, related lists of that type will not be visible on other tabs, search results will not return records of that type, report data for records of that type will not be available, merge fields of that type will not be available, and custom links of that type will not be visible'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:68,
    completed: false,
    selected: false,
    marked: false,
    title : 'For each profile, you can set the hours when users can log in and the IP addresses from which they can log in.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:69,
    completed: false,
    selected: false,
    marked: false,
    title : 'If a user’s profile contains log in hour restrictions which of the following time zones is used to calculate the hours they have access to Salesforce.com CRM?',
    options : [
      {id : 'A', text : 'Organization wide default time zone'},
      {id : 'B', text : 'User\'s time zone' },
      {id : 'C', text : 'Time zone set in the user\'s profile'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:70,
    completed: false,
    selected: false,
    marked: false,
    title : 'What setting is controlled by a user’s profile?',
    options : [
      {id : 'A', text : 'Locale settings'},
      {id : 'B', text : 'Feature license assignment' },
      {id : 'C', text : 'Field-level security'},
      {id : 'D', text : 'Record type assignment'},
      {id : 'E', text : 'Assigned apps'}
    ],
    answer : ['C','D','E'],
    selectedAnswer : []
  },
  {
    id:71,
    completed: false,
    selected: false,
    marked: false,
    title : 'When users log in to Salesforce, either via the user interface, the API, or a desktop client Salesforce CRM confirms the log in is authorized using all of the following EXCEPT:',
    options : [
      {id : 'A', text : 'Salesforce CRM then checks whether the user’s profile has IP address restrictions. If IP address restrictions are defined for the user’s profile, any login from an undesignated IP address is denied and any login from a specified IP address is allowed.'},
      {id : 'B', text : 'If profile-based IP address restrictions aren’t set, then Salesforce CRM checks whether the user is logging in from an IP address she or he hasn’t used to access Salesforce CRM before' },
      {id : 'C', text : 'Salesforce CRM checks whether the organization has login hour restrictions. If login hour restrictions are specified, any login outside the specified hours is denied'},
      {id : 'D', text : 'Salesforce CRM checks whether the user’s profile has login hour restrictions. If login hour restrictions are specified for the user’s profile, any login outside the specified hours is denied'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:72,
    completed: false,
    selected: false,
    marked: false,
    title : 'Can logins on specific days be restricted?',
    options : [
      {id : 'A', text : 'Yes'},
      {id : 'B', text : 'No' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:73,
    completed: false,
    selected: false,
    marked: false,
    title : 'What does Salesforce authenticate before allowing a user to log in through the user interface?',
    options : [
      {id : 'A', text : 'Whether the user\'s profile has specified business hours'},
      {id : 'B', text : 'Whether the user\'s profile is API enabled' },
      {id : 'C', text : 'Whether the user\'s profile has IP address restrictions'},
      {id : 'D', text : 'Whether the user\'s profile has login hour restrictions'},
      {id : 'E', text : 'Whether the organization has trusted IP addresses'}
    ],
    answer : ['C','D','E'],
    selectedAnswer : []
  },
  {
    id:74,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which feature restricts a user\'s ability to log into Salesforce?',
    options : [
      {id : 'A', text : 'Trusted IP ranges'},
      {id : 'B', text : 'Login hours' },
      {id : 'C', text : 'Login IP ranges'},
      {id : 'D', text : 'Password policies'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:75,
    completed: false,
    selected: false,
    marked: false,
    title : 'A user at Universal container reports an error message when attempting to log in. the administrator checks the user’s login history, but there is no record of the attempted login. What could be the cause of this issue?',
    options : [
      {id : 'A', text : 'The user is attempting to login with the wrong password'},
      {id : 'B', text : 'The user is attempting to login outside of the profile IP login range' },
      {id : 'C', text : 'The user is attempting to login outside of the profile login hours'},
      {id : 'D', text : 'The user is attempting to login with the wrong username'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:76,
    completed: false,
    selected: false,
    marked: false,
    title : 'A user profile has login hour restrictions set to Monday through Friday, 8:00 am to 5:00 pm. The user logged in at 4:30 p.m. on Tuesday and it is now 5:01 pm. Which behavior of the application should the user expect?',
    options : [
      {id : 'A', text : 'The use will be able to continue working but will be unable to starts any new sessions.'},
      {id : 'B', text : 'The user will be able to continue working and start new session' },
      {id : 'C', text : 'The user will be logged out and unsaved work in process will be saved'},
      {id : 'D', text : 'The user will be logged out and any unsaved work in process will be lost'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:77,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which Feature is not available in Salesforce.com? ',
    options : [
      {id : 'A', text : 'Profile based Login Hours'},
      {id : 'B', text : 'Profile based Login IP Ranges' },
      {id : 'C', text : 'Organization based Login Hours'},
      {id : 'D', text : 'Organization based Login IP ranges'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:78,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following does Salesforce CRM provide for restricting login access to the application?',
    options : [
      {id : 'A', text : 'Profile-based IP restrictions'},
      {id : 'B', text : 'Organization-wide IP restrictions' },
      {id : 'C', text : 'Profile-based login hour restrictions'},
      {id : 'D', text : 'Organization-wide login hour restrictions'}
    ],
    answer : ['A','B','C'],
    selectedAnswer : []
  },
  {
    id:79,
    completed: false,
    selected: false,
    marked: false,
    title : 'A user successfully login’s at 3:00 PM, What happens at 3:31 PM, if the Login hours for the user’s Profile are set from 7:30 AM to 3:30 PM?',
    options : [
      {id : 'A', text : 'User is automatically Logged Out'},
      {id : 'B', text : 'User keeps working continuously without any issues' },
      {id : 'C', text : 'User is asked in a Popup window if he would like to extend his session'},
      {id : 'D', text : 'User is logged out once he tries to do any DML (Data Manipulation) Operation i.e. Save, Edit etc'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:80,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following statements are true about trusted ranges?',
    options : [
      {id : 'A', text : 'They enable end users to activate additional IP addresses for accessing salesforce'},
      {id : 'B', text : 'They are used to identify regular SF users' },
      {id : 'C', text : 'They include IP addresses that are used in conjunction with a browser cookie'},
      {id : 'D', text : 'They approve login requests from unknown browsers and IP addresses'}
    ],
    answer : ['B','C'],
    selectedAnswer : []
  },
  {
    id:81,
    completed: false,
    selected: false,
    marked: false,
    title : 'What will happen when a user attempts to log in to salesforce from an IP address that is outside the login IP range on the User’s profile within the organization-wide trusted IP range?',
    options : [
      {id : 'A', text : 'The user will not be able to log in at all'},
      {id : 'B', text : 'The user will be able to log in after the computer is activated' },
      {id : 'C', text : 'The user will be able to log in without activating the computer'},
      {id : 'D', text : 'The user will be able to log in after answering a security question'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:82,
    completed: false,
    selected: false,
    marked: false,
    title : 'Is identity confirmation necessary if a user\'s IP address is known and browser cookie exists?',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:83,
    completed: false,
    selected: false,
    marked: false,
    title : 'A security token is required for API access when connecting from an IP address within the list of trusted networks.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:84,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following statements is true about computer activation?',
    options : [
      {id : 'A', text : 'It is required to activate additional IP addresses for accessing SF'},
      {id : 'B', text : 'It is required for all IP addresses and browsers' },
      {id : 'C', text : 'It is required to access SF online'},
      {id : 'D', text : 'It is required to identify regular SF users'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:85,
    completed: false,
    selected: false,
    marked: false,
    title : 'To log into the Data Loader, the IP address must be a trusted IP or the User must know their security token.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:86,
    completed: false,
    selected: false,
    marked: false,
    title : 'If single sign-on is enabled for your organization, API and desktop client users cannot log in to Salesforce CRM unless their IP address is included on your organization’s list of trusted IP addresses or on their profile, if their profile has IP address restrictions set.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:87,
    completed: false,
    selected: false,
    marked: false,
    title : 'What are the two main parts of Workflow?',
    options : [
      {id : 'A', text : 'Actions and Time triggers'},
      {id : 'B', text : 'Rules and Actions' },
      {id : 'C', text : 'Email Alerts and Field updates'},
      {id : 'D', text : 'Rules and Tasks'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:88,
    completed: false,
    selected: false,
    marked: false,
    title : 'From the below … identify the WF action?',
    options : [
      {id : 'A', text : 'Create inbound messages'},
      {id : 'B', text : 'Create tasks' },
      {id : 'C', text : 'Create mobile alerts'},
      {id : 'D', text : 'Create section updates'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 89,
    completed: false,
    selected: false,
    marked: false,
    title : 'What happens if a WF task is assigned to a role containing more than one person?',
    options : [
      {id : 'A', text : 'Create multiple tasks'},
      {id : 'B', text : 'The owner of the record that triggered the rule becomes the task assignee' },
      {id : 'C', text : 'The task assignee will always be the origin user'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:90,
    completed: false,
    selected: false,
    marked: false,
    title : 'Match the WF steps to setup the requirement',
    options : [
      {id : 'A', text : 'Task:setup - Email Alert:Templates - Field Update:Field - Rule:criteria'},
      {id : 'B', text : 'Task:Field - Email Alert:Templates - Field Update:criteria - Rule:setup' },
      {id : 'C', text : 'Task:Templates - Email Alert:criteria - Field Update:Field - Rule:setup'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:91,
    completed: false,
    selected: false,
    marked: false,
    title : 'What action is possible with a workflow task?',
    options : [
      {id : 'A', text : 'A task can be reused in multiple workflow rules'},
      {id : 'B', text : 'A task can be tracked in the activity history' },
      {id : 'C', text : 'A single task can be assigned to multiple users'},
      {id : 'D', text : 'A task can be assigned to a Chatter Free user'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:92,
    completed: false,
    selected: false,
    marked: false,
    title : 'Sales representatives at Universal Containers should be notified any time support cases related to accounts they own change status. How can a system administrator accomplish this?',
    options : [
      {id : 'A', text : 'Enable field history tracking to send an email alert to the account owner'},
      {id : 'B', text : 'Create a workflow rule to send an email alert to the account owner' },
      {id : 'C', text : 'Create an escalation rule to notify the account owner'},
      {id : 'D', text : 'Create an auto-response rule to send an email alert to the account owner'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:93,
    completed: false,
    selected: false,
    marked: false,
    title : 'A sales executive at Universal containers wants to be notified whenever high-value opportunities are created for hot accounts.',
    options : [
      {id : 'A', text : 'Create the workflow rule on opportunity object'},
      {id : 'B', text : 'Create an escalation rules based on the opportunity amount' },
      {id : 'C', text : 'Create an auto-response rule based on the opportunity amount'},
      {id : 'D', text : 'Create a validation rule that evaluates the account rating'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:94,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which circumstance will prevent a system administrator from deleting a custom field?',
    options : [
      {id : 'A', text : 'The field is used in a page layout'},
      {id : 'B', text : 'The field is used in a workflow field update' },
      {id : 'C', text : 'The field is part of a field dependency'},
      {id : 'D', text : 'The field is used in a report'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:95,
    completed: false,
    selected: false,
    marked: false,
    title : 'A time-dependent action is placed in the workflow queue when the record is created.When will the action be removed from the queue?',
    options : [
      {id : 'A', text : 'When the record no longer matches the rule criteria'},
      {id : 'B', text : 'When a validation rule triggered for the record' },
      {id : 'C', text : 'When another record triggers the same workflow rule'},
      {id : 'D', text : 'When the action is deleted from workflow queue'}
    ],
    answer : ['A','D'],
    selectedAnswer : []
  },
  {
    id:96,
    completed: false,
    selected: false,
    marked: false,
    title : 'What can be done with a workflow field update action?',
    options : [
      {id : 'A', text : 'Change the record type of a record'},
      {id : 'B', text : 'Update the value of a formula field' },
      {id : 'C', text : 'Update the value of a field on a child object'},
      {id : 'D', text : 'Apply a specific value to a field'}
    ],
    answer : ['A','D'],
    selectedAnswer : []
  },
  {
    id:97,
    completed: false,
    selected: false,
    marked: false,
    title : 'The recruiting team at universal containers wants to be more proactive about renewing support plans with customers. They would like the support representative dedicated to each account to be notified a month before the account\’s support plan expires.What should an administrator configure to meet this requirement?',
    options : [
      {id : 'A', text : 'Auto-response rule'},
      {id : 'B', text : 'Assignment rule' },
      {id : 'C', text : 'Workflow rule'},
      {id : 'D', text : 'Escalation rule'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:98,
    completed: false,
    selected: false,
    marked: false,
    title : 'What should an administrator consider when configuring workflow rules?',
    options : [
      {id : 'A', text : 'Rules can be evaluated when records are created or edited.'},
      {id : 'B', text : 'Rule actions can take place immediately or on a specific date' },
      {id : 'C', text : 'Rules must be deactivated before using an import wizard'},
      {id : 'D', text : 'All existing records are evaluated when a new rule is activated'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:99,
    completed: false,
    selected: false,
    marked: false,
    title : 'An opportunity record created with a close date of July 30, meets the criteria of time –dependent workflow rule. The time dependent action is scheduled for July 23. What happens if the opportunity is edited before July 23 and no longer meets the criteria?',
    options : [
      {id : 'A', text : 'The time dependent action will execute on July 30'},
      {id : 'B', text : 'The time dependent action is put on hold' },
      {id : 'C', text : 'The Time dependent action will execute on July 23'},
      {id : 'D', text : 'The time dependent action is automatically removed from the queue'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:100,
    completed: false,
    selected: false,
    marked: false,
    title : 'User A modifies a record. This modification triggers a workflow rule for immediate execution that includes a field update on the current record. After the execution is complete, what user will be listed under the Last Modified field of this record?',
    options : [
      {id : 'A', text : 'User A'},
      {id : 'B', text : 'The designated workflow user' },
      {id : 'C', text : 'The default workflow user'},
      {id : 'D', text : 'The last user to modify the record prior to User A'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:101,
    completed: false,
    selected: false,
    marked: false,
    title : 'Identify the true statements about the workflow approval process?',
    options : [
      {id : 'A', text : 'When a record is submitted for approval the Admin can edit the record'},
      {id : 'B', text : 'You can forward an email approval request to another email address' },
      {id : 'C', text : 'The approver delegate can also approve a request'},
      {id : 'D', text : 'Approvers can view an approval request from their home page'},
      {id : 'E', text : 'Approvers can only access an approval page from the application'}
    ],
    answer : ['A','D'],
    selectedAnswer : []
  },
  {
    id:102,
    completed: false,
    selected: false,
    marked: false,
    title : 'Time-dependent workflow will not work with which type of workflow evaluation criteria?',
    options : [
      {id : 'A', text : 'Only when a Record is created'},
      {id : 'B', text : 'Every time a Record is created or edited' },
      {id : 'C', text : 'Every kind of workflow evaluation criteria'},
      {id : 'D', text : 'When a Record is edited and it didn’t previously meet the rule criteria'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:103,
    completed: false,
    selected: false,
    marked: false,
    title : 'A Workflow Approval process may be used for all of the following objects EXCEPT:',
    options : [
      {id : 'A', text : 'Opportunity'},
      {id : 'B', text : 'Users' },
      {id : 'C', text : 'Assets'},
      {id : 'D', text : 'Contracts'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:104,
    completed: false,
    selected: false,
    marked: false,
    title : 'All of the following actions may take place on a Workflow Rule EXCEPT:',
    options : [
      {id : 'A', text : 'Outbound API message'},
      {id : 'B', text : 'Update Field' },
      {id : 'C', text : 'Create a Task'},
      {id : 'D', text : 'Create an Event'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:105,
    completed: false,
    selected: false,
    marked: false,
    title : 'Workflow Tasks are NOT tracked in the Activity History and can be reported',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:106,
    completed: false,
    selected: false,
    marked: false,
    title : 'A record is modified on 1/1/2008. It meets criteria for a time-based workflow rule; this rule schedules an action for 7 days after rule execution. On 1/4/2008 the record is modified and no longer meets workflow rule criteria. On 1/5/2008 the record is modified and once again meets the initial time-based workflow rule criteria. How many workflow actions will execute and when?',
    options : [
      {id : 'A', text : '1 on 1/8/2008'},
      {id : 'B', text : '1 on 1/12/2008' },
      {id : 'C', text : '2 on 1/8/2008 and 1/12/2008'},
      {id : 'D', text : '0'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:107,
    completed: false,
    selected: false,
    marked: false,
    title : 'Workflow cannot be triggered upon import',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:108,
    completed: false,
    selected: false,
    marked: false,
    title : 'What statements is False for a workflow task',
    options : [
      {id : 'A', text : 'To assign tasks to multiple users, create multiple tasks as outcomes of the rule'},
      {id : 'B', text : 'A single task can be assigned to multiple users' },
      {id : 'C', text : 'The due dates for workflow task is based on number of calendar days, the rule fails to recognize only working business days by default'},
      {id : 'D', text : 'Historical tracking is allowed for workflow task'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:109,
    completed: false,
    selected: false,
    marked: false,
    title : 'Workflow Rules Consist of the following components',
    options : [
      {id : 'A', text : 'Workflow Task'},
      {id : 'B', text : 'Workflow Outbound Message' },
      {id : 'C', text : 'Workflow Field Updates'},
      {id : 'D', text : 'Workflow Actions'},
      {id : 'E', text : 'Workflow Email Alert'}
    ],
    answer : ['A','B','C','E'],
    selectedAnswer : []
  },
  {
    id:110,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is the maximum of time triggers per Workflow Rule?',
    options : [
      {id : 'A', text : '5'},
      {id : 'B', text : '10' },
      {id : 'C', text : '12'},
      {id : 'D', text : '100'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:111,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is the maximum number of workflow per entity (Object)? ',
    options : [
      {id : 'A', text : '5'},
      {id : 'B', text : '10' },
      {id : 'C', text : '20'},
      {id : 'D', text : '50'},
      {id : 'E', text : '100'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:112,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is the maximum of actions per time trigger you can have in a Workflow Rule? ',
    options : [
      {id : 'A', text : '5'},
      {id : 'B', text : '10' },
      {id : 'C', text : '20'},
      {id : 'D', text : '40'},
      {id : 'E', text : '100'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:113,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is the maximum number of actions you can have per Workflow Rule? ',
    options : [
      {id : 'A', text : '20'},
      {id : 'B', text : '40' },
      {id : 'C', text : '80'},
      {id : 'D', text : '100'},
      {id : 'E', text : '160'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:114,
    completed: false,
    selected: false,
    marked: false,
    title : 'Will Workflow evaluate rules retroactively?',
    options : [
      {id : 'A', text : 'Yes'},
      {id : 'B', text : 'No' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:115,
    completed: false,
    selected: false,
    marked: false,
    title : 'Select the order in which the Workflow actions fire in Salesforce.',
    options : [
      {id : 'A', text : 'Field Updates, Outbound Messages, Email Alerts, Tasks'},
      {id : 'B', text : 'Field Updates, Tasks, Email Alerts, Outbound Messages' },
      {id : 'C', text : 'Apex before Triggers, Apex after Triggers, Workflow Rules'},
      {id : 'D', text : 'Email Alerts, Outbound Messages, Field updates'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:116,
    completed: false,
    selected: false,
    marked: false,
    title : 'Final reject actions in a workflow approval process can include actions such as email alerts.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:117,
    completed: false,
    selected: false,
    marked: false,
    title : 'Record locking in a workflow approval process prevents users from editing a record only if they have a certain field-level security or sharing settings',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:118,
    completed: false,
    selected: false,
    marked: false,
    title : 'Workflow rules can\'t be triggered by campaign statistic fields, including individual campaign statistics and campaign hierarchy statistics.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:119,
    completed: false,
    selected: false,
    marked: false,
    title : 'Workflow rules are triggered when a standard object in a master-detail relationship is re-parented, even if the object\'s evaluation criteria is set to when a record is created, or when a record is edited and did not previously meet the rule criteria.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:120,
    completed: false,
    selected: false,
    marked: false,
    title : 'Workflow rules never trigger on converted leads',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:121,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can\'t package workflow rules with time triggers.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:122,
    completed: false,
    selected: false,
    marked: false,
    title : 'Workflow rules trigger automatically and are visible to the user.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:123,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can create email alerts for workflow rules on activities.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:124,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can set up Salesforce to automatically send email alerts, assign tasks, or update field values based on your organization\'s workflow',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:125,
    completed: false,
    selected: false,
    marked: false,
    title : 'Workflow Field Updates specify the field you want updated and the new value for it. Depending on the type of field, you can do the following Except',
    options : [
      {id : 'A', text : 'choose to apply a specific value'},
      {id : 'B', text : 'make the value blank' },
      {id : 'C', text : 'Delete the Field'},
      {id : 'D', text : 'calculate a value based on a formula you create'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:126,
    completed: false,
    selected: false,
    marked: false,
    title : 'Org wants to create a follow up task based on a field change. Which is the best way to do it?',
    options : [
      {id : 'A', text : 'Workflows'},
      {id : 'B', text : 'Rollup summary' },
      {id : 'C', text : 'Assignment rules'},
      {id : 'D', text : 'Record types'},
      {id : 'E', text : 'Workflow approvals'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:127,
    completed: false,
    selected: false,
    marked: false,
    title : 'Difference between workflow rule and workflow approval process is',
    options : [
      {id : 'A', text : 'A workflow rule is based on assignment rule and workflow approval is not'},
      {id : 'B', text : 'A workflow rule is based on manual submission and workflow approval is not' },
      {id : 'C', text : 'A workflow rule has workflow actions where as workflow approval does not'},
      {id : 'D', text : 'A workflow approval triggers on manual submission where as a workflow rule triggers on saving a record'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:128,
    completed: false,
    selected: false,
    marked: false,
    title : 'Existing records that meet the Workflow Rule criteria trigger the Rule',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:129,
    completed: false,
    selected: false,
    marked: false,
    title : 'The first approval step in a process specifies the action to take if a record does not advance to that step.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:130,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is parallel approval Routing?',
    options : [
      {id : 'A', text : 'When you can mass assign your locked records to users in your same Role'},
      {id : 'B', text : 'The ability to send approval requests to yourself multiple times, so you can approve a record' },
      {id : 'C', text : 'The ability to take back approval requests once you have sent them'},
      {id : 'D', text : 'The ability to send approval requests to multiple approvers in a single step'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:131,
    completed: false,
    selected: false,
    marked: false,
    title : 'How do you find out that the Approval Process is edited? ',
    options : [
      {id : 'A', text : 'Last Modified By Field'},
      {id : 'B', text : 'Audit trail' },
      {id : 'C', text : 'History Record on Approval page layout'},
      {id : 'D', text : 'All of the Above'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:132,
    completed: false,
    selected: false,
    marked: false,
    title : 'An Approval Process begins when a record is:',
    options : [
      {id : 'A', text : 'Created'},
      {id : 'B', text : 'Saved' },
      {id : 'C', text : 'Edited'},
      {id : 'D', text : 'Submitted for Approval'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:133,
    completed: false,
    selected: false,
    marked: false,
    title : 'All fields on the Approval page layout are available to view on the Approval History related list',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:134,
    completed: false,
    selected: false,
    marked: false,
    title : 'What can be reviewed using the process visualizer?',
    options : [
      {id : 'A', text : 'Sales Processes'},
      {id : 'B', text : 'Approval Processes' },
      {id : 'C', text : 'Support Processes'},
      {id : 'D', text : 'Workflow Rules'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:135,
    completed: false,
    selected: false,
    marked: false,
    title : 'Can a delegated approver revoke a previously approved process?',
    options : [
      {id : 'A', text : 'Yes'},
      {id : 'B', text : 'No' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:136,
    completed: false,
    selected: false,
    marked: false,
    title : 'You cannot mass remove records from an approval process; removal of records must be done one by one.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:137,
    completed: false,
    selected: false,
    marked: false,
    title : 'Multiple Approvers have received your request for approving a discount that was invoked by the approval process? Approver A rejects your request. Approver B accepts your request after Approver A rejects it. Is your request approved or denied. (Assume you need only one person to approve out of all the approvers)',
    options : [
      {id : 'A', text : 'Approved'},
      {id : 'B', text : 'Denied' },
      {id : 'C', text : 'Approval process is revoked'},
      {id : 'D', text : 'Approval changes to pending stage due to conflict within approvers'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:138,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is required to make a user an approver in the approval process?',
    options : [
      {id : 'A', text : 'The user must be in the same role as the approval submitter in the role hierarchy'},
      {id : 'B', text : 'The user must opt in to receive email alters when an approval is requested' },
      {id : 'C', text : 'The user must be set up as a delegated approver'},
      {id : 'D', text : 'The user must have read permission for the object in the approval process'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:139,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which statement is true regarding an approval process?',
    options : [
      {id : 'A', text : 'An approval action defines the result of record approval or rejection'},
      {id : 'B', text : 'A delegated approver can reassign approval requests' },
      {id : 'C', text : 'The approval history related list can be used to track the process'},
      {id : 'D', text : 'A assignment rule defines the approver for each process step'}
    ],
    answer : ['A','C'],
    selectedAnswer : []
  },
  {
    id:140,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which option is available when using process Visualizer?',
    options : [
      {id : 'A', text : 'Share annotated approval process diagrams'},
      {id : 'B', text : 'Add approval steps from the process Visualizer' },
      {id : 'C', text : 'Edit the criteria used to trigger the approval process'},
      {id : 'D', text : 'View approval process as a flow chart'}
    ],
    answer : ['A','D'],
    selectedAnswer : []
  },
  {
    id:141,
    completed: false,
    selected: false,
    marked: false,
    title : 'AW computing has a discount workflow that requires approval from the Sales director when the discount is over 15% and from the VP of Global sales if the discount is over 30%. The sales rep has created a discount for 10% on a new opportunity. What happens when the sales Rep submits the request for approval?',
    options : [
      {id : 'A', text : 'Discount will be automatically approved'},
      {id : 'B', text : 'Request will be sent to the Sales director for approval' },
      {id : 'C', text : 'Request will be sent to Sales director and VP of Global Sales for Approval'},
      {id : 'D', text : 'Request will be sent to VP of Global Sales for approval'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:142,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is an automated process your organization can use to approve records in Salesforce.com?',
    options : [
      {id : 'A', text : 'Validation Process'},
      {id : 'B', text : 'Approval Process' },
      {id : 'C', text : 'Workflow Rules'},
      {id : 'D', text : 'Record Types'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:143,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which action type is represented by an icon in the process visualizer?',
    options : [
      {id : 'A', text : 'Request rejection details'},
      {id : 'B', text : 'View recall details' },
      {id : 'C', text : 'Start a new task'},
      {id : 'D', text : 'Sent email alert'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id:144,
    completed: false,
    selected: false,
    marked: false,
    title : 'When are validation rules applied when using Salesforce for Outlook?',
    options : [
      {id : 'A', text : 'Every time a user views a record'},
      {id : 'B', text : 'Every time a record is updated' },
      {id : 'C', text : 'Every time data is synchronized with the server'},
      {id : 'D', text : 'Every time a record is saved'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:145,
    completed: false,
    selected: false,
    marked: false,
    title : 'When can a validation rule be used to prevent invalid data?',
    options : [
      {id : 'A', text : 'When records are deleted by a user'},
      {id : 'B', text : 'When record are imported' },
      {id : 'C', text : 'When record are edited by user'},
      {id : 'D', text : 'When records are submitted using web-to-lead'},
      {id : 'E', text : 'When records are updated by a workflow rule'}
    ],
    answer : ['B','C','E'],
    selectedAnswer : []
  },
  {
    id:146,
    completed: false,
    selected: false,
    marked: false,
    title : 'On which of these areas Data Validation rules are enforced but no feedback is given to users?',
    options : [
      {id : 'A', text : 'Lead Convert'},
      {id : 'B', text : 'Record Merger' },
      {id : 'C', text : 'Web-TO-Case'},
      {id : 'D', text : 'Salesforce Mobile'},
      {id : 'E', text : 'Self Service Portal'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:147,
    completed: false,
    selected: false,
    marked: false,
    title : 'When you insert a record using the API, Do Validation rules are expected?',
    options : [
      {id : 'A', text : 'Yes'},
      {id : 'B', text : 'No' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:148,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following statements are true about Data Validation? ',
    options : [
      {id : 'A', text : 'Validation rules apply to all new and updated records for an object'},
      {id : 'B', text : 'Validation rules can update fields, which are not included in a page layout' },
      {id : 'C', text : 'Validation rules can reference fields, which are not included in a page layout'},
      {id : 'D', text : 'If an error message is not set, a default message will be prompted instead'},
      {id : 'E', text : 'All of the above'}
    ],
    answer : ['A','C'],
    selectedAnswer : []
  },
  {
    id:149,
    completed: false,
    selected: false,
    marked: false,
    title : 'When are data Validation Rules enforced?',
    options : [
      {id : 'A', text : 'Upon opening the record'},
      {id : 'B', text : 'Upon closing the record' },
      {id : 'C', text : 'Upon editing a field'},
      {id : 'D', text : 'Upon saving a record'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:150,
    completed: false,
    selected: false,
    marked: false,
    title : 'Data Validation rules are not supported in which Salesforce edition?',
    options : [
      {id : 'A', text : 'Contact Manager'},
      {id : 'B', text : 'Group' },
      {id : 'C', text : 'Professional'},
      {id : 'D', text : 'Developer'},
      {id : 'E', text : 'Unlimited'},
      {id : 'F', text : 'Personal'},
    ],
    answer : ['F'],
    selectedAnswer : []
  },
  {
    id:151,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the statements is/are true for data validation',
    options : [
      {id : 'A', text : 'Data Validation can enforce data integrity as well as make a field required in the page layout'},
      {id : 'B', text : 'Data Validation can prevent duplication of records' },
      {id : 'C', text : 'Data Validation run on the client machine after the user clicks the Save button'},
      {id : 'D', text : 'Data Validation rules are not enforced when using API & import operations'},
      {id : 'E', text : 'Validation rules can be activated / deactivated by the user'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:152,
    completed: false,
    selected: false,
    marked: false,
    title : 'Data Validation rules are also enforced using the API and Import Wizards',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:153,
    completed: false,
    selected: false,
    marked: false,
    title : 'When you define a Data Validation Rule, what else must you also define?',
    options : [
      {id : 'A', text : 'Whether or not the field is required'},
      {id : 'B', text : 'An Error Message' },
      {id : 'C', text : 'What email gets sent if the Rule triggers'},
      {id : 'D', text : 'Whether or not the record gets deleted'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:154,
    completed: false,
    selected: false,
    marked: false,
    title : 'Data Validation Rules are executed for a field (vs. as record)',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:155,
    completed: false,
    selected: false,
    marked: false,
    title : 'A company has a custom field "Hours Worked" and the sys admin is tasked to create a validation rule so that field will not accept a negative value',
    options : [
      {id : 'A', text : 'Hours_Worked != 0'},
      {id : 'B', text : 'NOT(Hours_Worked < 0)'},
      {id : 'C', text : 'Hours_Worked__C <> 0'},
      {id : 'D', text : 'Hours_Worked < 0'},
      {id : 'E', text : 'NOT(Hours_Worked__C > 0)'},
      {id : 'F', text : 'Hours_Worked__C < 0'}
    ],
    answer : ['F'],
    selectedAnswer : []
  },
  {
    id:156,
    completed: false,
    selected: false,
    marked: false,
    title : 'Data Validation Rules are formulas that evaluate',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:157,
    completed: false,
    selected: false,
    marked: false,
    title : 'All of the following are true about Validation Rules EXCEPT:',
    options : [
      {id : 'A', text : 'All active validation rules are run each time at save'},
      {id : 'B', text : 'Validation rules are not enforced on existing data. They only run during subsequent record creation / updates' },
      {id : 'C', text : 'You can enter records through Data Loader bypassing the Validation Rules'},
      {id : 'D', text : 'Multiple error messages may be displayed at one time'},
      {id : 'E', text : 'Validation rules can be activated / deactivated by admin'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:158,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following are reasons for creating a Validation Rule?',
    options : [
      {id : 'A', text : 'To prevent users from entering bad data'},
      {id : 'B', text : 'To ensure users enter data only when it is required' },
      {id : 'C', text : 'To prevent bad data being imported'},
      {id : 'D', text : 'To hide fields from certain users'}
    ],
    answer : ['A','B','C'],
    selectedAnswer : []
  },
  {
    id:159,
    completed: false,
    selected: false,
    marked: false,
    title : 'Data validation rules impact all supported objects except for...?',
    options : [
      {id : 'A', text : 'Account'},
      {id : 'B', text : 'Event' },
      {id : 'C', text : 'Forecasts'},
      {id : 'D', text : 'Territories'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id:160,
    completed: false,
    selected: false,
    marked: false,
    title : 'When importing data, what happens if some records do NOT met the data validation criteria?',
    options : [
      {id : 'A', text : 'Import Process ignores the data validation criteria'},
      {id : 'B', text : 'Import process requires user authorization to import the invalid records' },
      {id : 'C', text : 'Import process aborts when it encounters the first invalid record'},
      {id : 'D', text : 'Import process fails only for the records with invalid data'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:161,
    completed: false,
    selected: false,
    marked: false,
    title : 'Identify the statement that correctly defines data validation',
    options : [
      {id : 'A', text : 'Data validation ensures the integrity of data before its saved in SF'},
      {id : 'B', text : 'Data validation ensures the integrity of data after its saved in SF' },
      {id : 'C', text : 'Data validation ensures the integrity of data when data is imported in SF'},
      {id : 'D', text : 'Data validation ensures the integrity of data when data is exported in SF'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:162,
    completed: false,
    selected: false,
    marked: false,
    title : 'When case assignment rules are being set up, cases can be assigned to whom?',
    options : [
      {id : 'A', text : 'Case Team'},
      {id : 'B', text : 'Queue' },
      {id : 'C', text : 'Contact'},
      {id : 'D', text : 'User'}
    ],
    answer : ['B','D'],
    selectedAnswer : []
  },
  {
    id:163,
    completed: false,
    selected: false,
    marked: false,
    title : 'Case Assignment Rules are based on elapsed time ',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:164,
    completed: false,
    selected: false,
    marked: false,
    title : 'During a lead import, you can choose to enable active assignment rules as part of the import ',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:165,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is true about Lead Assignment Rule?',
    options : [
      {id : 'A', text : 'Determines how Leads are automatically routed to User or Queue'},
      {id : 'B', text : 'Contains Rule Entries, pre-defined business rules, that determine lead routing' },
      {id : 'C', text : 'Virtual storage bin used to group leads based on criteria (e.g., industry, campaign)'},
      {id : 'D', text : 'Users have visibility into the Lead Queues to which they are members'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:166,
    completed: false,
    selected: false,
    marked: false,
    title : 'How many lead assignment rules can be active at one time?',
    options : [
      {id : 'A', text : 'One'},
      {id : 'B', text : 'Two' },
      {id : 'C', text : 'Eleven'},
      {id : 'D', text : 'Twenty-three'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:167,
    completed: false,
    selected: false,
    marked: false,
    title : 'If your organization uses territory management, the new account is evaluated by account assignment rules and may be assigned to one or more territories.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:168,
    completed: false,
    selected: false,
    marked: false,
    title : 'Escalation rules only run during the business hours with which they are associated? ',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:169,
    completed: false,
    selected: false,
    marked: false,
    title : 'Case escalation rules triggered on the last modification will be reset each time a user does which of the following actions?',
    options : [
      {id : 'A', text : 'Reads the case'},
      {id : 'B', text : 'Adds a related comment to the case' },
      {id : 'C', text : 'Adds an activity or sends an email from the case record'},
      {id : 'D', text : 'Edits the case'},
      {id : 'E', text : 'All of the above'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:170,
    completed: false,
    selected: false,
    marked: false,
    title : 'What happens when an email is sent to a customer from a case?',
    options : [
      {id : 'A', text : 'Case hierarchy is reset'},
      {id : 'B', text : 'Case escalation is reset' },
      {id : 'C', text : 'Case escalation rules are deleted'},
      {id : 'D', text : 'Case assignment rules are deleted'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:171,
    completed: false,
    selected: false,
    marked: false,
    title : 'You must be a user of salesforce.com in order to receive an email notification in the case escalation process',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:172,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which user is listed in the case history related list for case changes made for assignment and escalation rules?',
    options : [
      {id : 'A', text : 'The owner of the case when the rule was triggered'},
      {id : 'B', text : 'The default case owner specified in the assignment or escalation rule' },
      {id : 'C', text : 'The user who created the assignment or escalation rule'},
      {id : 'D', text : 'The automated case user specified in the support settings'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:173,
    completed: false,
    selected: false,
    marked: false,
    title : 'Match the automation rules with the order in which they are processed.',
    options : [
      {id : 'A', text : 'Validation Rules->Assignment Rules->Auto-response Rules->Workflow Rules->Escalation Rules'},
      {id : 'B', text : 'Escalation Rules->Assignment Rules->Auto-response Rules->Workflow Rules->Validation Rules' },
      {id : 'C', text : 'Assignment Rules->Validation Rules->Auto-response Rules->Workflow Rules->Escalation Rules'},
      {id : 'D', text : 'Validation Rules->Assignment Rules->Auto-response Rules->Escalation Rules->Workflow Rules'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:174,
    completed: false,
    selected: false,
    marked: false,
    title : 'A system administrator at Universal Containers needs to prevent sales representatives from editing fields on an opportunity once the opportunity has been moved to a closed stage. Which data validation tool can be used to accomplish this?',
    options : [
      {id : 'A', text : 'Formula fields'},
      {id : 'B', text : 'Data Validation rules' },
      {id : 'C', text : 'Record Types and read only page layouts'},
      {id : 'D', text : 'Workflow field updates'}
    ],
    answer : ['B','C'],
    selectedAnswer : []
  },
  {
    id:175,
    completed: false,
    selected: false,
    marked: false,
    title : 'Universal Containers has multiple support teams. One team handles technical support issues and another handles billing issues. When would a system administrator consider introducing a new record type for cases?',
    options : [
      {id : 'A', text : 'When different field-level security is required'},
      {id : 'B', text : 'When different record access is required' },
      {id : 'C', text : 'When multiple page layouts are required'},
      {id : 'D', text : 'When different picklist values are required'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id:176,
    completed: false,
    selected: false,
    marked: false,
    title : 'Universal Containers needs to use cases to manage both customer support and internal change requests. Which functionality should a system administrator use to meet this requirement?',
    options : [
      {id : 'A', text : 'Page Layouts'},
      {id : 'B', text : 'Support processes' },
      {id : 'C', text : 'Validation rules'},
      {id : 'D', text : 'Delegated administration'},
      {id : 'E', text : 'Record types'}
    ],
    answer : ['A','B','E'],
    selectedAnswer : []
  },
  {
    id:177,
    completed: false,
    selected: false,
    marked: false,
    title : 'A universal container has two business groups, products and services. Both groups will be using to track deals, but different fields are required by each group.How should a system administrator meet this requirement?',
    options : [
      {id : 'A', text : 'Create two sales processes'},
      {id : 'B', text : 'Create two permission sets' },
      {id : 'C', text : 'Create two record types'},
      {id : 'D', text : 'Create two page layouts'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id:178,
    completed: false,
    selected: false,
    marked: false,
    title : 'Universal container has two sales groups, each group has its own unique sales process.What is the best way to ensure that sales representatives have access to only the stages relevant to their sales process when working on opportunities?',
    options : [
      {id : 'A', text : 'Page layouts'},
      {id : 'B', text : 'Multi-select picklists' },
      {id : 'C', text : 'Record types'},
      {id : 'D', text : 'Roles'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:179,
    completed: false,
    selected: false,
    marked: false,
    title : 'A system admin at UC created a new account record type. However, Sales users are unable to select the record type when creating new account records. What is a possible reason for this?',
    options : [
      {id : 'A', text : 'The record type has not been activated'},
      {id : 'B', text : 'The record type has not been added to the sales user profile' },
      {id : 'C', text : 'The record type has not been set as the default record type'},
      {id : 'D', text : 'The record type does not have an assigned page layout'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:180,
    completed: false,
    selected: false,
    marked: false,
    title : 'What does a page layout allow an admin to control?',
    options : [
      {id : 'A', text : 'The Fields users see on detail and edit pages'},
      {id : 'B', text : 'The Fields users see in reports and list views' },
      {id : 'C', text : 'The record types available to each role and profile'},
      {id : 'D', text : 'The business process and related picklist value displayed'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:181,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is true about Page layouts?',
    options : [
      {id : 'A', text : 'Control the layout and organization of detail and edit pages'},
      {id : 'B', text : 'Control which fields, related lists, and custom links users see, on detail and edit pages only' },
      {id : 'C', text : 'Control which standard and custom buttons display on detail pages and related lists'},
      {id : 'D', text : 'Determine whether fields are visible, read only, or required, on detail and edit pages only'},
      {id : 'E', text : 'All of the Above'}
    ],
    answer : ['E'],
    selectedAnswer : []
  },
  {
    id:182,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following are not controlled by the Page layouts?',
    options : [
      {id : 'A', text : 'Custom Fields'},
      {id : 'B', text : 'Sections' },
      {id : 'C', text : 'Related List'},
      {id : 'D', text : 'Custom Button'},
      {id : 'E', text : 'Validation Rule Error message'}
    ],
    answer : ['E'],
    selectedAnswer : []
  },
  {
    id:183,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is NOT controlled by the Page Layout?',
    options : [
      {id : 'A', text : 'How detail and edit pages are organized'},
      {id : 'B', text : 'Field properties like visible, read-only and required' },
      {id : 'C', text : 'Controlling which fields, related lists, and Custom Links users sees'},
      {id : 'D', text : 'Page section customizations'},
      {id : 'E', text : 'Rollup summary'}
    ],
    answer : ['E'],
    selectedAnswer : []
  },
  {
    id:184,
    completed: false,
    selected: false,
    marked: false,
    title : 'To make a field required, which of the following is used (Pick the best possible answer)',
    options : [
      {id : 'A', text : 'Page Layout'},
      {id : 'B', text : 'Field Level Security' },
      {id : 'C', text : 'Profile'},
      {id : 'D', text : 'Both Page Layout and Field Level Security'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:185,
    completed: false,
    selected: false,
    marked: false,
    title : 'Is it possible for a Page layout to be associated with a Record Type?',
    options : [
      {id : 'A', text : 'Yes'},
      {id : 'B', text : 'No'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:186,
    completed: false,
    selected: false,
    marked: false,
    title : 'You CANNOT delete standard fields but you can remove non-required standard fields from a page layout',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:187,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following components inherits the record type and profile associations, related lists, fields, and field access settings from its associated page layout?',
    options : [
      {id : 'A', text : 'Console layout'},
      {id : 'B', text : 'Mini Page Layout' },
      {id : 'C', text : 'Detail View'},
      {id : 'D', text : 'Related Objects'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:188,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which component can be included in a custom home page layout?',
    options : [
      {id : 'A', text : 'Analytic Snapshots'},
      {id : 'B', text : 'Dashboard components' },
      {id : 'C', text : 'Pending approvals list'},
      {id : 'D', text : 'Trending Chatter topics'},
      {id : 'E', text : 'Messages and alerts'}
    ],
    answer : ['B','C','E'],
    selectedAnswer : []
  },
  {
    id:189,
    completed: false,
    selected: false,
    marked: false,
    title : 'How can you ensure that a value is entered in a field?',
    options : [
      {id : 'A', text : 'By Field level security'},
      {id : 'B', text : 'By Setting property in page layout' },
      {id : 'C', text : 'By creating a lookup field'},
      {id : 'D', text : 'By defining pickup list values'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:190,
    completed: false,
    selected: false,
    marked: false,
    title : 'On the page layout, some standard fields have properties which cannot be changed (e.g. the Created By and Modified By fields)',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:191,
    completed: false,
    selected: false,
    marked: false,
    title : 'If a field on page layout is required and is read-only on FLS, what would the user experience on UI?',
    options : [
      {id : 'A', text : 'The user is able to enter value because it is required'},
      {id : 'B', text : 'The user is not able to edit it because it is read only' },
      {id : 'C', text : 'The user is not able to see it'},
      {id : 'D', text : 'The user is able to edit it but not able to save it'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:192,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which statements are true about business processes?',
    options : [
      {id : 'A', text : 'Each business process is associated with one or more record types'},
      {id : 'B', text : 'Each record type is associated with one or more business processes' },
      {id : 'C', text : 'For opportunity objects records are created before business processes'},
      {id : 'D', text : 'Record types implement business processes through page layouts'},
      {id : 'E', text : 'Record types help track sales lifecycle s across divisions, groups and markets'}
    ],
    answer : ['A','D'],
    selectedAnswer : []
  },
  {
    id:193,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following can NOT be edited on the Page Layout Editor?',
    options : [
      {id : 'A', text : 'Field positions'},
      {id : 'B', text : 'Buttons' },
      {id : 'C', text : 'Page sections'},
      {id : 'D', text : 'Related lists'},
      {id : 'E', text : 'Picklist values'}
    ],
    answer : ['E'],
    selectedAnswer : []
  },
  {
    id:194,
    completed: false,
    selected: false,
    marked: false,
    title : 'Page layouts are assigned to users based on? Select the correct choice',
    options : [
      {id : 'A', text : 'Layout Properties'},
      {id : 'B', text : 'Salesforce Golden Rules' },
      {id : 'C', text : 'Default settings'},
      {id : 'D', text : 'Assignment Settings'},
      {id : 'E', text : 'Profile Settings'}
    ],
    answer : ['E'],
    selectedAnswer : []
  },
  {
    id:195,
    completed: false,
    selected: false,
    marked: false,
    title : 'Why would you create different Record Types?',
    options : [
      {id : 'A', text : 'To allow users to use different page layouts'},
      {id : 'B', text : 'To allow users to see different values in picklists depending on their job function' },
      {id : 'C', text : 'To allow users to use different Business Processes depending on their job function'},
      {id : 'D', text : 'All of the above'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:196,
    completed: false,
    selected: false,
    marked: false,
    title : 'Record types are used to implement custom business processes by associating them to specific',
    options : [
      {id : 'A', text : 'Objects'},
      {id : 'B', text : 'Page Layouts' },
      {id : 'C', text : 'Records'},
      {id : 'D', text : 'Campaigns'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:197,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following special picklist fields are not available for record types because they’re used exclusively for sales processes, lead processes, support processes, and solution processes',
    options : [
      {id : 'A', text : 'Opportunity Stage'},
      {id : 'B', text : 'Lead Status' },
      {id : 'C', text : 'Case Status'},
      {id : 'D', text : 'Solution Status'},
      {id : 'E', text : 'Case Origin'}
    ],
    answer : ['A','B','C','D'],
    selectedAnswer : []
  },
  {
    id:198,
    completed: false,
    selected: false,
    marked: false,
    title : 'Universal Containers has segmented its customer base into two categories: High Wealth and Retirement. High Wealth accounts should be visible to the High Wealth Sales Team Members only. Retirement accounts should be visible to all sales users.How can a system administrator meet this requirement?',
    options : [
      {id : 'A', text : 'Create a new record type for the High Wealth accounts and share the record type with High Wealth team members'},
      {id : 'B', text : 'Create a new profile for Retirement sales team members and remove read access to High Wealth account records' },
      {id : 'C', text : 'Set the OWD sharing to public read-only and create a sharing rule to limit access to High Wealth accounts'},
      {id : 'D', text : 'Set the OWD sharing to private and create a sharing rule to share Retirement accounts with all sales users'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:199,
    completed: false,
    selected: false,
    marked: false,
    title : 'Regional sales users at Universal Containers sell to both business and consumer accounts. However, sales users are unable to see the set of stages that apply to consumer opportunities. How can an administrator correct the problem?',
    options : [
      {id : 'A', text : 'Remove all but one record type from the regional sales team profile'},
      {id : 'B', text : 'Check for a validation rule that restricts the visibility of the opportunity stages' },
      {id : 'C', text : 'Assign the relevant record types and sales processes to the regional sales team profile'},
      {id : 'D', text : 'Ensure that regional sales users are routing consumer opportunities to the appropriate approver'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:200,
    completed: false,
    selected: false,
    marked: false,
    title : 'If the System Administrator set a user to create only a certain record type, this user\'s ability to view other record types is affected.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:201,
    completed: false,
    selected: false,
    marked: false,
    title : 'Record Type may determine the default value of a picklist field',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:202,
    completed: false,
    selected: false,
    marked: false,
    title : 'The difference between an opportunity record type and a sales process is:',
    options : [
      {id : 'A', text : 'The sales process controls the stage field, the record type controls all other picklist fields'},
      {id : 'B', text : 'The record type controls the stage field, the sales process controls all other picklist fields' },
      {id : 'C', text : 'The record type controls the picklist fields'},
      {id : 'D', text : 'The sales process controls all picklist fields'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:203,
    completed: false,
    selected: false,
    marked: false,
    title : 'Multiple record types may be created for every tab, with the exception of',
    options : [
      {id : 'A', text : 'Home'},
      {id : 'B', text : 'Accounts' },
      {id : 'C', text : 'Forecasting'},
      {id : 'D', text : 'Opportunity'},
      {id : 'E', text : 'Reports'},
      {id : 'F', text : 'Documents'}
    ],
    answer : ['A','C','E','F'],
    selectedAnswer : []
  },
  {
    id:204,
    completed: false,
    selected: false,
    marked: false,
    title : 'In order to implement more business process multiple record types must also be implemented',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:205,
    completed: false,
    selected: false,
    marked: false,
    title : 'Record type picklist filtering applies to dependent picklists',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:206,
    completed: false,
    selected: false,
    marked: false,
    title : 'Record Types are not available in Select the right choice',
    options : [
      {id : 'A', text : 'Developer Edition'},
      {id : 'B', text : 'Enterprise Edition' },
      {id : 'C', text : 'Unlimited Edition'},
      {id : 'D', text : 'Professional Edition'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:207,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is a Record Type? Select the right choice',
    options : [
      {id : 'A', text : 'Allows you to define different sets of picklist values for both standard and custom picklist'},
      {id : 'B', text : 'Allows you to define different sets of picklist values only for standard picklist' },
      {id : 'C', text : 'Allows you to define different sets of picklist values only for custom picklist'},
      {id : 'D', text : 'Allows you to define different sets of picklist values only for new picklist'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:208,
    completed: false,
    selected: false,
    marked: false,
    title : 'You cannot delete all the record types for an object if the object is referenced in which of the following',
    options : [
      {id : 'A', text : 'Apex Code script'},
      {id : 'B', text : 'Page layouts' },
      {id : 'C', text : 'Profiles'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:209,
    completed: false,
    selected: false,
    marked: false,
    title : 'Before creating record types for Leads, Opportunities, Cases or Solutions, you need to create what? ',
    options : [
      {id : 'A', text : 'Profile'},
      {id : 'B', text : 'Approval Process' },
      {id : 'C', text : 'Business processes'},
      {id : 'D', text : 'Validation Rule'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:210,
    completed: false,
    selected: false,
    marked: false,
    title : 'Users can be restricted to view a particular field in views, searches and reports by hiding the field at',
    options : [
      {id : 'A', text : 'Page Layout'},
      {id : 'B', text : 'Field Level Security' },
      {id : 'C', text : 'User Profile'},
      {id : 'D', text : 'None of the Above'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:211,
    completed: false,
    selected: false,
    marked: false,
    title : 'A custom field is made Read-only from the Field level security and required from Page layout. The Field will be',
    options : [
      {id : 'A', text : 'Throws an error and don’t allow to make Read only field Mandatory from page layout'},
      {id : 'B', text : 'Read Only for the User' },
      {id : 'C', text : 'Required for the User'},
      {id : 'D', text : 'User is given a choice in a pop up window'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:212,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is the best way to make the Field Mandatory for everyone?',
    options : [
      {id : 'A', text : 'Page Layout'},
      {id : 'B', text : 'Validation Rule' },
      {id : 'C', text : 'Roles & Profiles'},
      {id : 'D', text : 'Field Level Security'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:213,
    completed: false,
    selected: false,
    marked: false,
    title : 'Universal Container wants to ensure that users complete the standard industry field when creating a new account record. To address the concern the administrator set the Industry field as required. However, some users are still able to create a new account record without completing the Industry Field. What should an administrator do to troubleshoot the issue?',
    options : [
      {id : 'A', text : 'Verify the users have the “Modify All Data” permissions for the account on their profiles'},
      {id : 'B', text : 'Verify the field level security for the Industry field is not set to “Read Only” on the user profiles' },
      {id : 'C', text : 'Verify the user has Edit Permission for accounts on their profiles'},
      {id : 'D', text : 'Verify the Industry field is sent as required on all account page layouts assigned to the users'}
    ],
    answer : ['B','D'],
    selectedAnswer : []
  },
  {
    id:214,
    completed: false,
    selected: false,
    marked: false,
    title : 'Universally required fields always display on edit pages regardless of field-level security',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:215,
    completed: false,
    selected: false,
    marked: false,
    title : 'Field-level security can be used to make a field required',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:216,
    completed: false,
    selected: false,
    marked: false,
    title : 'Fields hidden using Field Level Security are subject to Data Validation Rules',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:217,
    completed: false,
    selected: false,
    marked: false,
    title : 'All of the following may be used when updating a record using the AppExchange Data Loader EXCEPT:',
    options : [
      {id : 'A', text : 'External Id'},
      {id : 'B', text : 'Parent External Id' },
      {id : 'C', text : 'Record Id'},
      {id : 'D', text : 'Record Number'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:218,
    completed: false,
    selected: false,
    marked: false,
    title : 'Can the Data Loader access all objects?',
    options : [
      {id : 'A', text : 'Yes'},
      {id : 'B', text : 'No' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:219,
    completed: false,
    selected: false,
    marked: false,
    title : 'Is the Data Loader Cloud based?',
    options : [
      {id : 'A', text : 'Yes'},
      {id : 'B', text : 'No' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:220,
    completed: false,
    selected: false,
    marked: false,
    title : 'What database actions can the Data Loader perform?',
    options : [
      {id : 'A', text : 'Insert'},
      {id : 'B', text : 'Extract' },
      {id : 'C', text : 'Update'},
      {id : 'D', text : 'Upsert'},
      {id : 'E', text : 'Delete'}
    ],
    answer : ['A','B','C','D','E'],
    selectedAnswer : []
  },
  {
    id:221,
    completed: false,
    selected: false,
    marked: false,
    title : 'To log into the Data Loader, the IP address must be a trusted IP or the User must know their security token',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:222,
    completed: false,
    selected: false,
    marked: false,
    title : 'As an Admin you can schedule regular data imports using the Data Loader',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:223,
    completed: false,
    selected: false,
    marked: false,
    title : 'What are true for the data loader?',
    options : [
      {id : 'A', text : 'It reduplicates and inserts records'},
      {id : 'B', text : 'It comes installed with salesforce.com application' },
      {id : 'C', text : 'It can load all objects, including custom objects'},
      {id : 'D', text : 'It cannot load custom objects'},
      {id : 'E', text : 'It generates an error report after the loading'}
    ],
    answer : ['C','E'],
    selectedAnswer : []
  },
  {
    id:224,
    completed: false,
    selected: false,
    marked: false,
    title : 'What type of information can NOT be shown with an S-Control Dashboard component?',
    options : [
      {id : 'A', text : 'Combination of two other Dashboard components'},
      {id : 'B', text : 'External feed of data' },
      {id : 'C', text : 'Data Warehouse information'},
      {id : 'D', text : 'Flash representations of data'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:225,
    completed: false,
    selected: false,
    marked: false,
    title : 'When test driving an application on the AppExchange Directory, it is not possible to view the S-Control configurations of that application ',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:226,
    completed: false,
    selected: false,
    marked: false,
    title : 'An S-Control may be all of the following EXCEPT:',
    options : [
      {id : 'A', text : 'HTML'},
      {id : 'B', text : 'XML' },
      {id : 'C', text : 'URL'},
      {id : 'D', text : 'Snippet'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:227,
    completed: false,
    selected: false,
    marked: false,
    title : 'An S-Control may be used in all of the following ways EXCEPT:',
    options : [
      {id : 'A', text : 'Dashboard Component'},
      {id : 'B', text : 'Custom Button' },
      {id : 'C', text : 'Custom Link'},
      {id : 'D', text : 'Import Wizard'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:228,
    completed: false,
    selected: false,
    marked: false,
    title : 'A marketing user has received a file of leads to import into salesforce. What tool can be used to avoid duplicate lead records?',
    options : [
      {id : 'A', text : 'Import Wizard'},
      {id : 'B', text : 'Merge Leads Function' },
      {id : 'C', text : 'Data Loader'},
      {id : 'D', text : 'Validation Rules'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:229,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following objects cannot be imported via the Salesforce.com Import Wizard?',
    options : [
      {id : 'A', text : 'Leads'},
      {id : 'B', text : 'Accounts' },
      {id : 'C', text : 'Opportunities'},
      {id : 'D', text : 'Solutions'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:230,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which Import functionality of salesforce.com should be used if one needs to import the 30000 Cases in Salesforce.com?',
    options : [
      {id : 'A', text : 'Import Wizard'},
      {id : 'B', text : 'Data Loader' },
      {id : 'C', text : 'Any one of A or B'},
      {id : 'D', text : 'None of A or B'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:231,
    completed: false,
    selected: false,
    marked: false,
    title : 'How many User records can be imported via Import Wizard?',
    options : [
      {id : 'A', text : '500'},
      {id : 'B', text : '5000' },
      {id : 'C', text : '50000'},
      {id : 'D', text : 'User Records cannot be imported via Import Wizard'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:232,
    completed: false,
    selected: false,
    marked: false,
    title : 'The system administrator has created a new custom object and application. This individual now needs to populate the new object with 1000 records, which are formatted in a CSV file. The Import Wizard (Data Management --> Import Custom Objects) is appropriate for this task.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:233,
    completed: false,
    selected: false,
    marked: false,
    title : 'How does the Import Wizard perform matching when updating records?',
    options : [
      {id : 'A', text : 'External Id'},
      {id : 'B', text : 'Record Name' },
      {id : 'C', text : 'Salesforce Id'},
      {id : 'D', text : 'Custom Field'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:234,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which objects have built in import wizards?',
    options : [
      {id : 'A', text : 'Accounts'},
      {id : 'B', text : 'Contacts' },
      {id : 'C', text : 'Leads'},
      {id : 'D', text : 'Solutions'},
      {id : 'E', text : 'Custom Objects'}
    ],
    answer : ['A','B','C','D','E'],
    selectedAnswer : []
  },
  {
    id:235,
    completed: false,
    selected: false,
    marked: false,
    title : 'When is it appropriate to use the Import Wizard versus the Data Loader?',
    options : [
      {id : 'A', text : 'Need to prevent duplicates'},
      {id : 'B', text : 'When the Admin needs to disable trigger' },
      {id : 'C', text : 'Record count is more than 50000'},
      {id : 'D', text : 'When the Admin needs to choose whether to trigger Workflow rules'}
    ],
    answer : ['A','D'],
    selectedAnswer : []
  },
  {
    id:236,
    completed: false,
    selected: false,
    marked: false,
    title : 'How many records of a custom object can a System Admin import using the Salesforce Import Wizard?',
    options : [
      {id : 'A', text : '500'},
      {id : 'B', text : '5000' },
      {id : 'C', text : '25000'},
      {id : 'D', text : '50000'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:237,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can use the import wizard to erase existing field values. Once a custom field is deleted, can it be restored?',
    options : [
      {id : 'A', text : 'Yes'},
      {id : 'B', text : 'No' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:238,
    completed: false,
    selected: false,
    marked: false,
    title : 'Joe is attempting to import an invalid value into a picklist field. The import wizard will respond with an error message',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:239,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following statements are true about Import wizard?',
    options : [
      {id : 'A', text : 'You can import Accounts, contacts, leads, solutions and custom objects using the Import wizard'},
      {id : 'B', text : 'You can work with both records of data and metadata' },
      {id : 'C', text : 'When importing data file size cannot exceed 100 MB and each record in the file cannot be bigger than 400 KB'},
      {id : 'D', text : 'Standard users can import up to 50000 account or contact records per session'}
    ],
    answer : ['A','C'],
    selectedAnswer : []
  },
  {
    id:240,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is conditional highlighting for reports?',
    options : [
      {id : 'A', text : 'You can set conditions that when met will report the calculated fields'},
      {id : 'B', text : 'Set thresholds for report analysis' },
      {id : 'C', text : 'Used for summary and matrix reports'},
      {id : 'D', text : 'Limited to three summaries per report'},
      {id : 'E', text : 'Is applied only to summary rows'},
      {id : 'F', text : 'None of the above'}
    ],
    answer : ['B','D','E','F'],
    selectedAnswer : []
  },
  {
    id:241,
    completed: false,
    selected: false,
    marked: false,
    title : 'Where can conditional highlighting be used?',
    options : [
      {id : 'A', text : 'Matrix reports'},
      {id : 'B', text : 'Summary reports' },
      {id : 'C', text : 'Enhanced List views'},
      {id : 'D', text : 'Tabular reports'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:242,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which data can be highlighted in a report using conditional highlighting?',
    options : [
      {id : 'A', text : 'Grand totals'},
      {id : 'B', text : 'Summarized totals' },
      {id : 'C', text : 'Data fields'},
      {id : 'D', text : 'Grouped by field names'},
      {id : 'E', text : 'Summary formula'}
    ],
    answer : ['B','C','F'],
    selectedAnswer : []
  },
  {
    id:243,
    completed: false,
    selected: false,
    marked: false,
    title : 'Conditional Highlighting only applies to the first summary field column in the table?',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:244,
    completed: false,
    selected: false,
    marked: false,
    title : 'How many ranges can be defined in the case of a Conditional Highlighting?',
    options : [
      {id : 'A', text : '1'},
      {id : 'B', text : '2' },
      {id : 'C', text : '3'},
      {id : 'D', text : '4'},
      {id : 'E', text : '5'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:245,
    completed: false,
    selected: false,
    marked: false,
    title : 'List view can (Choose all that apply)',
    options : [
      {id : 'A', text : 'Show up to 2000 records in the record count display'},
      {id : 'B', text : 'Print up to 1000 records in print view' },
      {id : 'C', text : 'Be enabled and disabled by individual users'},
      {id : 'D', text : 'Print list can be exported to excel'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:246,
    completed: false,
    selected: false,
    marked: false,
    title : 'What is the maximum number of records to be printed in the Printable View of a list view?',
    options : [
      {id : 'A', text : '200'},
      {id : 'B', text : '500' },
      {id : 'C', text : '1000'},
      {id : 'D', text : '2000'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:247,
    completed: false,
    selected: false,
    marked: false,
    title : 'In List View Enhancements, users can export list results to CSV file',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:248,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which is not true about enhanced list views?',
    options : [
      {id : 'A', text : 'Multiple records can be edited in list views'},
      {id : 'B', text : 'Dependent picklist can be edited with inline editing in list views' },
      {id : 'C', text : 'Inline editing is possible with list views'},
      {id : 'D', text : 'Record types can be changed in list views'}
    ],
    answer : ['B','D'],
    selectedAnswer : []
  },
  {
    id:249,
    completed: false,
    selected: false,
    marked: false,
    title : 'If you re-label a Standard Object the standard list views on every Salesforce tab will automatically be renamed ',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:250,
    completed: false,
    selected: false,
    marked: false,
    title : 'When creating a custom list view you can display fields that are not on your page layout for that object?',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:251,
    completed: false,
    selected: false,
    marked: false,
    title : 'I can access a "list view" of records by clicking on the leads, opportunities, or accounts tabs. I can also filter my list views so I can see exactly what I need',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:252,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of these is NOT true of “list views” in SFDC:',
    options : [
      {id : 'A', text : 'I can choose different list formats from the drop-down menu at the top of any list.'},
      {id : 'B', text : 'List views can only be created or customized by my administrator' },
      {id : 'C', text : 'List views are customizable, and I can create and customize my own views'},
      {id : 'D', text : 'I can change my list view format for any record type by choosing a view type from the drop-down menu'},
      {id : 'E', text : 'I can drag and drop columns within my list view to change the appearance or order of data'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:253,
    completed: false,
    selected: false,
    marked: false,
    title : 'What user Interface setting must be enabled for users to edit records in a list view? ',
    options : [
      {id : 'A', text : 'Inline editing'},
      {id : 'B', text : 'Enhanced Lists' },
      {id : 'C', text : 'Enhanced Profile List Views'},
      {id : 'D', text : 'Enhanced Page Layout Editor'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:254,
    completed: false,
    selected: false,
    marked: false,
    title : 'Where do you go to create a List View so that you can see it on the Console, under the Accounts object?',
    options : [
      {id : 'A', text : 'Create a list view on the Console'},
      {id : 'B', text : 'Create a list view on Accounts' },
      {id : 'C', text : 'Create a list view on Contacts'},
      {id : 'D', text : 'Create a field on the Console'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id : 255,
    completed: false,
    selected: false,
    marked: false,
    title : 'A new list view can be created from within the console',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:256,
    completed: false,
    selected: false,
    marked: false,
    title : 'Inline Editing is available in visual force pages?',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:257,
    completed: false,
    selected: false,
    marked: false,
    title : 'Name one place where inline Editing is not currently possible',
    options : [
      {id : 'A', text : 'List Views'},
      {id : 'B', text : 'Related Lists' },
      {id : 'C', text : 'Edit Page'},
      {id : 'D', text : 'All of the above'}
    ],
    answer : ['B','C'],
    selectedAnswer : []
  },
  {
    id:258,
    completed: false,
    selected: false,
    marked: false,
    title : 'Inline Editing updates the field when',
    options : [
      {id : 'A', text : 'The field is saved/updated'},
      {id : 'B', text : 'When the record is saved/updated' },
      {id : 'C', text : 'When the return key is pressed'},
      {id : 'D', text : 'None of the above'}
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:259,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following is inline editing not supported?',
    options : [
      {id : 'A', text : 'System Fields'},
      {id : 'B', text : 'Case Stage' },
      {id : 'C', text : 'Related Lists'},
      {id : 'D', text : 'Contact Phone Number'},
      {id : 'E', text : 'List View'},
      {id : 'F', text : 'Read-Only Fields'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:260,
    completed: false,
    selected: false,
    marked: false,
    title : 'You can use inline editing to maintain all detail pages in the application except for...?',
    options : [
      {id : 'A', text : 'Cases'},
      {id : 'B', text : 'Documents' },
      {id : 'C', text : 'Forecasts'},
      {id : 'D', text : 'Accounts'}
    ],
    answer : ['B','C'],
    selectedAnswer : []
  },
  {
    id:261,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which Setting can a system administrator enable in the user interface?',
    options : [
      {id : 'A', text : 'Customizable recent tags'},
      {id : 'B', text : 'Chatter messenger for specific users' },
      {id : 'C', text : 'Printable list views'},
      {id : 'D', text : 'Related list hover links'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:262,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following are setting options for the User Interface?',
    options : [
      {id : 'A', text : 'Enable Collapsible Sections'},
      {id : 'B', text : 'Show Quick Create' },
      {id : 'C', text : 'Show customer Sidebar Components on All Pages'},
      {id : 'D', text : 'Transfer all Open Opportunities'},
      {id : 'E', text : 'Enable Drag-and-drop scheduling on List Views'}
    ],
    answer : ['A','B','C','E'],
    selectedAnswer : []
  },
  {
    id:263,
    completed: false,
    selected: false,
    marked: false,
    title : 'The User Interface Settings can be adjusted for individual users.',
    options : [
      {id : 'A', text : 'True'},
      {id : 'B', text : 'False' }
    ],
    answer : ['B'],
    selectedAnswer : []
  },
  {
    id:264,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which setting can a system administrator control in the Salesforce user interface?',
    options : [
      {id : 'A', text : 'Enable spell checker'},
      {id : 'B', text : 'Enable enhanced list views' },
      {id : 'C', text : 'Enable customizable recent items'},
      {id : 'D', text : 'Enable hover details'},
      {id : 'D', text : 'Enable Chatter for specific users'}
    ],
    answer : ['C'],
    selectedAnswer : []
  },
  {
    id:265,
    completed: false,
    selected: false,
    marked: false,
    title : 'The sales team at universal container wants an easy solution to gather customer requirements and share presentations with their customers.What should an administrator do to help the sales team achieve this goal?',
    options : [
      {id : 'A', text : 'Add customers to private chatter groups'},
      {id : 'B', text : 'Use chatter files to share presentations' },
      {id : 'C', text : 'Add customers to libraries'},
      {id : 'D', text : 'Create opportunity teams for customers'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:266,
    completed: false,
    selected: false,
    marked: false,
    title : 'How can a system administrator add users to a salesforce organization using chatter free?',
    options : [
      {id : 'A', text : 'Assign chatter free licenses to users outside the specified email domains'},
      {id : 'B', text : 'Assign chatter free licenses to existing Salesforce users' },
      {id : 'C', text : 'Create users in the organization and assign them a chatter free license'},
      {id : 'D', text : 'Enable invites to allow users to invite others within specified email domains'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id:267,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which statement about chatter posts and comments are true?',
    options : [
      {id : 'A', text : 'Update to the chatter feed on a record are only visible to users with access to the record'},
      {id : 'B', text : 'Posts made to a user’s profile are visible to all users in the organization' },
      {id : 'C', text : 'Posts to a user’s profile are hidden from anyone below that user in the role hierarchy'},
      {id : 'D', text : 'Posts to a user’s profile can be made private by clicking the icon'}
    ],
    answer : ['A','B'],
    selectedAnswer : []
  },
  {
    id:268,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which is true about a Chatter Plus user?',
    options : [
      {id : 'A', text : 'Contents, Ideas, Answers, Accounts, Contacts, Chatter, Groups, People, Profiles tab and up to ten Custom Objects only'},
      {id : 'B', text : 'Contents, Ideas, Answers, Accounts, Contacts, Chatter, Groups, People, Profiles tab and up to 20 Custom Objects' },
      {id : 'C', text : 'Accounts, Contacts and up to 10 Custom objects only'},
      {id : 'D', text : 'It can access all that a Chatter Free user can, accounts and contacts and it can also access up to 10 custom objects only'},
      {id : 'E', text : 'It can access all that a Chatter Free user can and it can also access up to 10 custom objects but not standard objects'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:269,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which of the following are features on Chatter tab?',
    options : [
      {id : 'A', text : 'Like'},
      {id : 'B', text : '@Mention' },
      {id : 'C', text : 'Live Updates'},
      {id : 'D', text : 'All of the Above'}
    ],
    answer : ['D'],
    selectedAnswer : []
  },
  {
    id:270,
    completed: false,
    selected: false,
    marked: false,
    title : 'Which combination of objects is available when creating a custom reports type for Chatter reports?',
    options : [
      {id : 'A', text : 'Opportunities, Followers, User Feed'},
      {id : 'B', text : 'Accounts, User Feed, Comments' },
      {id : 'C', text : 'Users, User Feed, Comments'},
      {id : 'D', text : 'Chatter Groups, Members'}
    ],
    answer : ['C','D'],
    selectedAnswer : []
  },
  {
    id:271,
    completed: false,
    selected: false,
    marked: false,
    title : 'Chatter Desktop is not available in which Salesforce Edition?',
    options : [
      {id : 'A', text : 'Free Edition'},
      {id : 'B', text : 'Group' },
      {id : 'C', text : 'Professional'},
      {id : 'D', text : 'Developer'},
      {id : 'C', text : 'Enterprise'},
      {id : 'D', text : 'Contact Manager'}
    ],
    answer : ['A'],
    selectedAnswer : []
  },
  {
    id:272,
    completed: false,
    selected: false,
    marked: false,
    title : 'Where does Chatter Feed display?',
    options : [
      {id : 'A', text : 'On Chatter profiles'},
      {id : 'B', text : 'On record detail pages' },
      {id : 'C', text : 'On the Home tab and Chatter tab'},
      {id : 'D', text : 'On List Views'},
      {id : 'E', text : 'On Chatter groups'},
      {id : 'F', text : 'Under related lists'}
    ],
    answer : ['A','B','E'],
    selectedAnswer : []
  },
  {
    id:273,
    completed: false,
    selected: false,
    marked: false,
    title : 'Chatter Desktop is available with performance optimizations and enhancements that let you:',
    options : [
      {id : 'A', text : 'Click files to preview them'},
      {id : 'B', text : 'Subscribe to a user' },
      {id : 'C', text : 'Select the To: Me tab to see posts directed to you'},
      {id : 'D', text : 'Click groups and users to view their feeds'},
      {id : 'E', text : 'Post to a group or user\'s feed '},
      {id : 'F', text : 'Subscribe to a user feed post'}
    ],
    answer : ['C'],
    selectedAnswer : []
  }
]
