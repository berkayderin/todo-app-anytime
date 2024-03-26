import { Nav } from 'react-bootstrap'
import NavItemLink from './NavItemLink'
import React from 'react'

interface Tab {
	eventKey: string
	label: string
}

interface NavPillProps {
	tabs: Tab[]
}

const NavPill: React.FC<NavPillProps> = ({ tabs }) => (
	<Nav variant="pills" className="flex-column">
		{tabs.map((tab) => (
			<NavItemLink key={tab.eventKey} eventKey={tab.eventKey}>
				{tab.label}
			</NavItemLink>
		))}
	</Nav>
)

export default NavPill
