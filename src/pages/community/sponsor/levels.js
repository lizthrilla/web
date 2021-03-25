import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import ContentLayout from '../../../components/ContentLayout'
import CommunityNavigation from '../../../components/community/CommunityNavigation'
import SponsorshipNavigation from '../../../components/community/SponsorshipNavigation'

export default () => (
  <ContentLayout
    title="Sponsorship"
    subTitle="Levels"
    nav={<CommunityNavigation />}
    subNav={<SponsorshipNavigation />}
  >
    <h3 className="title is-3">Sponsorship Levels</h3>

    <table className="table">
      <tbody>
        <tr>
          <th>Friend </th>
          <td>$100</td>
          <td>5 T-Shirts per year</td>
        </tr>
        <tr>
          <th>Supporter </th>
          <td>$200</td>
          <td>
            5 T-Shirts per year + Community Experience<sup>1</sup>
          </td>
        </tr>
        <tr>
          <th>SDG JR </th>
          <td>$500</td>
          <td>Supplies + Loaner Laptops</td>
        </tr>
        <tr>
          <th>Crash Course </th>
          <td>$500</td>
          <td>Healthy Snacks + Sponsor Promotion</td>
        </tr>
        <tr>
          <th>Graduation </th>
          <td>$2,500</td>
          <td>Healthy Snacks + Sponsor Promotion</td>
        </tr>
        <tr>
          <th>Scholarships </th>
          <td>$1K - 15K</td>
          <td>Diversity Scholarship ($1,000) Full Tuition ($14,900)</td>
        </tr>
        <tr>
          <th>Room Sponsor </th>
          <td>$5K - 50K</td>
          <td>
            Quarterly or Annual Naming Rights<sup>2</sup>
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      <sup>1</sup>
      <strong>Community Experience</strong> - a program to enhance and support
      the students attending the program, along with the Tampa Bay tech
      community at large. This will include providing healthy snacks on campus,
      continuous community engagement through Meetups, additional courses on
      more advanced topics, and hackathons.
    </p>
    <p>
      <sup>2</sup>
      <strong>Naming Rights</strong> - rooms will be named in honor of the donor
      and names will be displayed prominently. Room sizing will determine the
      amount of donation requested for naming rights.
    </p>

    <hr />

    <p className="has-text-centered">
      <OutboundLink
        className="button is-primary"
        href="http://bit.ly/SDG-supporter-form"
      >
        Support SDG
      </OutboundLink>
    </p>
  </ContentLayout>
)
