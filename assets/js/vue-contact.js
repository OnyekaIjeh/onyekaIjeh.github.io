var app = new Vue(
  {
    el: '#contact',
    data () {
      return {
        formdata: {
          name: '',
          email: '',
          comment: '',
          _subject: 'Feedback from onyeka.name.ng'
        },
        feedback: '',
        url: 'https://formspree.io/hello@onyeka.name.ng'
      }
    },
    methods: {
      sendtoformspree: function () {
        app.feedback = ''
        app.sending = true
        document.getElementById('submitButton').disabled = true
        document.getElementById('submitButton').value = 'Sending...'

        axios.post(app.url, app.formdata)

                .then(function (response) {
                  app.sending = false
                  app.formdata.name = ''
                  app.formdata.email = ''
                  app.formdata.comment = ''
                  document.getElementById('submitButton').value = 'Send Message'
                  app.feedback = "Thanks for reaching out! I'd get back to you ASAP!"
                  alert("Thanks for reaching out! I'd get back to you ASAP!")
                })

                .catch(function (error) {
                  app.sending = false
                  document.getElementById('submitButton').disabled = false
                  document.getElementById('submitButton').value = 'Send Message'
                  app.feedback = 'There was an error submitting the form, please try again.'
                  alert('There was an error submitting the form, please try again.')
                })
      }
    }
  })
