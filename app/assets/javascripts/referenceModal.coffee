initReferenceModal = ->
  $('#reference-modal').modal('hide')
  $('.reference-link').click ->
    slug = $(this).data('slug')
    modal = $('#reference-modal')
    modalContent = $("#reference-modal-#{slug}")
    modal.find('.modal-title').html(modalContent.find('.title').html())
    modal.find('.modal-body').html(modalContent.find('.content').html())

    href = $(this).attr('href')
    modal.find('.lesson-link').click ->
      modal.modal('hide')
      location.href = href

    modal.modal('show')
    return false

$(document).on('turbolinks:load', initReferenceModal)
