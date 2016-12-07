function createPage(pageId, challengeCount) {
  var page = $(document.createElement('DIV'));
  page.attr('id', pageId);

  for (var i=0; i<challengeCount; ++i) {
    var challengeId = 'challenge' + (i + 1);
    var challenge = $(document.createElement('DIV'));
    challenge.attr('id', challengeId);

    var editor = $(document.createElement('DIV'));
    editor.addClass('editor')
    challenge.append(editor);

    var run = $(document.createElement('DIV'));
    run.addClass('run')
    challenge.append(run);

    var canvas = $(document.createElement('CANVAS'));
    canvas.attr('id', pageId + '_' + challengeId);
    challenge.append(canvas);

    var alert = $(document.createElement('DIV'));
    alert.addClass('alert');
    challenge.append(alert);

    page.append(challenge);
  }
  $(document.body).append(page);
  return page;
}

// .code-editor.col-xs-6
//   %h5
//     Editor
//     %small (write code below)
//   .editor{id: editor_id}<
//     = yield
//
//   .log.bg-faded.text-muted.small
//     %button.close{"aria-label" => "Close", :type => "button"}
//       %span{"aria-hidden" => "true"} ×
//     .title
//       %strong Message Log
//     .messages
//
//   .buttons.py-1
//     .run.btn.btn-success
//       Run
//     .reset.btn.btn-danger.float-xs-right
//       Reset
//
// .visual.col-xs-6
//   %h5
//     Canvas
//     %small (your drawing will display here)
//   .canvas
//     .background.hidden-xl-down= image_tag('lessons/fill_rect/challenge1.png')
//     %canvas#fill_rect_challenge1
//   .alert
