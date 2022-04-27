# Alche-Meet-Me! w/ Mock Service Worker

## Demo

[https://alchemeetme-testing-msw.netlify.app/](https://alchemeetme-testing-msw.netlify.app/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/adv-react-alchemeetme-msw) to get started.

### Learning Objectives

- Use `msw` to intercept api requests globally
- Use `msw` to intercept a specific api request

### Description

For this deliverable, you will be filling out the `msw` that is starting to be implemented in our `App.test.jsx`. Throughout the file you will see 🚨 letting you know what you need to do to get your server running.

You will be configuring two servers in your test file. One server to mock the api globally and another to mock the file within a specific test run. Read the [msw docs](https://mswjs.io/docs/) if you get stuck!

When the server is running correctly all tests will pass.

Modify the `App.test.jsx` file

### Acceptance Criteria

- The fetch call to supabase is mocked globally with `msw`
- The fetch call to supabase is mocked in a specific test with `msw`

### Rubric

| Tasks                                         | Points |
| :-------------------------------------------- | -----: |
| correctly import needed modules               |      1 |
| start and stop `msw` server                   |      1 |
| use `msw` to mock api call globally           |      3 |
| use `msw` to mock api call in a specific test |      3 |
| Successful netlify deployment                 |      2 |

---

### Optional

The api sending my profile information is from a supabase db (`'src/services/user.js'`), and you can see my credentials in the `.env` file. This is def a bad practice, but a necessary evil. You can replace my supabase url and key in the `.env` file with your own credentials to display your own data.

You will need to create a new `users` table in supabase with fields for:

- name
- avatar
- header
- likes (this field requires the array option in supabase)
- motto
- color

These fields are currently required for display with no code changes. Feel free to add any more fields you desire, and make the required code changes to display the field.
