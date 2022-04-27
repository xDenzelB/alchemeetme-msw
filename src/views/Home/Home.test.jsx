import { screen, render } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should send a user object with all needed properties', async () => {
  render(<Home user={user} />)

  expect(user).toHaveProperty('id')
  expect(user).toHaveProperty('name')
  expect(user).toHaveProperty('avatar')
  expect(user).toHaveProperty('header')
  expect(user).toHaveProperty('likes')
  expect(user).toHaveProperty('motto')
  expect(user).toHaveProperty('color')
})

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const { name, color, motto, likes } = user

  const profileHeader = await screen.findByAltText('header')
  const avatar = screen.getByAltText('avatar')

  const profileName = screen.getByRole('heading', { name })
  const userMotto = screen.getByText(motto)
  const favoriteColor = screen.getByText(color)
  const interests = screen.getByRole('heading', { name: /interests/i })
  const likeList = screen.getByRole('list')

  expect(profileHeader).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(profileName).toBeInTheDocument()
  expect(userMotto).toBeInTheDocument()
  expect(favoriteColor).toBeInTheDocument()
  expect(interests).toBeInTheDocument()
  expect(likeList.children.length).toEqual(likes.length)
})