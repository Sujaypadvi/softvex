import { sendContactEmail } from '../services/emailService.js'
import { appendToSheet } from '../services/sheetService.js'

// Store contacts (in production, use a database)
// This is a simple in-memory store for demonstration
const contacts = []

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body

    // Sanitize input
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      service: service ? service.trim() : null,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress,
    }

    // Store contact (in production, save to database)
    contacts.push(contactData)
    console.log('Contact stored:', contactData)

    // Send email notification (optional - won't fail if email fails)
    await sendContactEmail(contactData)

    // Append to Google Sheet
    try {
      const sheetData = {
        Timestamp: contactData.submittedAt,
        Name: contactData.name,
        Email: contactData.email,
        Phone: contactData.phone,
        Service: contactData.service,
        Message: contactData.message,
      }
      await appendToSheet(sheetData)
      console.log('Contact data appended to Google Sheet')
    } catch (sheetError) {
      console.error('Error appending to Google Sheet:', sheetError)
      // Don't fail the user request, just log the error.
    }

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: contacts.length,
        submittedAt: contactData.submittedAt,
      },
    })
  } catch (error) {
    console.error('Error in submitContact:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.',
    })
  }
}

// Get all contacts (for admin - in production, add authentication)
export const getContacts = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: contacts,
      count: contacts.length,
    })
  } catch (error) {
    console.error('Error in getContacts:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve contacts.',
    })
  }
}
