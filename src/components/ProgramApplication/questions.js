export default [
  [],
  [
    {
      type: 'cohort',
      question: 'When are you hoping to start the program?',
    },
    {
      type: 'check',
      question: 'How did you hear about Suncoast Developers Guild?',
      answers: [
        'Meetup',
        'Twitter',
        'Facebook',
        'Instagram',
        'LinkedIn',
        'Google',
        'News Media',
        'Radio Ad',
        'Postcard Mailer',
        'Reddit',
        'Flyer',
        'Creative Loafing',
        'Referral',
        'Other',
      ],
    },
    {
      type: 'medium-text',
      question:
        'Tell us more about how you heard about SDG. If it was a referral, let us know who to thank!',
    },
    {
      type: 'select',
      question: 'Where are you located?',
      answers: [
        'Pinellas County',
        'Hillsborough County',
        'Pasco County',
        'Manatee County',
        'Sarasota County',
        'Polk County',
        'Elsewhere in Florida',
        'Outside of Florida',
      ],
    },
  ],
]
