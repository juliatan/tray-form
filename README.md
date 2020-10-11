# Tray technical test

This app is a form that allows users to enter their details and privacy preferences. It then confirms that their form has been submitted. There's also a [deployed version](https://julia-tray-form.netlify.app).

## Requirements

- Some of the core libraries imported and used:
  - `react`
  - `formik`
  - `yup`
  - `node-sass`

## Getting started

- Install Node.js and Yarn if you don't already have them installed.
- Download this repo and `cd` into the directory.
- In this directory, run `yarn install`.
- Start the React server in terminal with `yarn start`.

## App features

- There are 3 pages: (1) User details collection, (2) Privacy details collection, (3) Verification reminder.
- The tabs at the top of each page shows the user which stage they are at in the overall form.
- I used Formik to help render the forms used in the UserDetails and PrivacyDetails pages. This allowed for simple state management (rather than having to use a more complex library like Redux). Along with Yup, it also allowed for a simple validation solution of the form input fields.
- Upon successful submission, form details are console logged.

## Testing

- Tests for the app have been written using the React Testing Library.
- To run the test suite, run `yarn test` whilst in the app's root folder.

### Extending the app

**Changing the configuration of a certain page**

- The 3 pages have each been separated out into their own components, namely `<UserDetails>`, `<PrivacyDetails>` and `<VerificationReminder>`. Each of these components can be safely reconfigured if necessary.
- The `<Layout>` component acts as the state manager for the form details, as well as the current stage of the form a user is currently at.
- If you want to amend the order of these pages, they can be set in the `<Layout>` component by ensuring the tab state is set correctly upon the form submission of each page.

**Adding new pages**

- A new component should be created for any new pages.
- These can then be added to the `<Layout>` component.
- The `<FormTabs>` component should also be amended, whereby a new `<FormTab>` component can be added for the new page.

**Going back a page**

- If we want to give the app the illusion of having multiple pages in the form, where the URL changes for each page, I would look at utilising a library like `react-router-dom`.
- If we were not concerned about this, we could add a back button to each page, and display any previously filled-in form inputs by checking the state of the `<userDetails>` and `<privacyDetails>` in the `<Layout>` class component.

### Note

- The `<FormTab>` component currently utilises `<a href="#">` tag placeholders. Should we decide to use React Router, these should be substitued with `<NavLinks>`.
- I decided not to abstract out the Formik forms for this app as there was not much repitition across the 2 components that utilises Formik. Should more pages be added with similar Formik forms, there would be a stronger argument for creating a pre-styled Formik component.
- Despite a movement towards using solely functional components in React, I decided to use a class component for `<Layout>` as using React hooks for setting state in functional components is still fairly new. As I might be working with legacy React code, I wanted to show that I understand class-based components in React.

### Improvements

- A basic media breakpoint for mobile has been included in the app styling. I have also only tested this on Chrome version 85.0.4183.121. If I had more time, I would check the responsiveness of the design for different browsers and screen types.
- Similarly, this app could be improved by adding more accessibility tags such as ARIA attributes.
