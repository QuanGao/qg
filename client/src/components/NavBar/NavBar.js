
import "./NavBar.css";

import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Work', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'About', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Connect', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing

