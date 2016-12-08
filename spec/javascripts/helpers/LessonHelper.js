class TestPage {
  constructor(pageId, challengeCount) {
    this.pageId = pageId;
    this.challengeCount = challengeCount;
    this.buildPage();
    $(document).trigger('initialization:complete')
  }

  buildPage() {
    this.page = $(document.createElement('DIV'));
    this.page.attr('id', this.pageId);

    this.challengeEditors = [];
    this.challengeRunButtons = [];
    this.challengeCanvases = [];
    this.challengeAlerts = [];
    for (var i=0; i<this.challengeCount; ++i) {
      var challengeId = 'challenge' + (i + 1);
      var challenge = $(document.createElement('DIV'));
      challenge.attr('id', challengeId);

      var codeEditor = $(document.createElement('DIV'));
      codeEditor.addClass('code-editor');

      var editor = $(document.createElement('DIV'));
      editor.addClass('editor')
      codeEditor.append(editor);

      this.challengeEditors.push(editor);

      var buttons = $(document.createElement('DIV'));
      buttons.addClass('buttons');
      var run = $(document.createElement('DIV'));
      run.addClass('run');
      buttons.append(run);
      codeEditor.append(buttons);
      challenge.append(codeEditor);

      this.challengeRunButtons.push(run);

      var visual = $(document.createElement('DIV'));
      visual.addClass('visual');

      var canvas = $(document.createElement('CANVAS'));
      canvas.attr('id', this.pageId + '_' + challengeId);
      canvas.width(600).height(360);
      visual.append(canvas);

      this.challengeCanvases.push(canvas);

      var alert = $(document.createElement('DIV'));
      alert.addClass('alert');
      visual.append(alert);
      challenge.append(visual);

      this.challengeAlerts.push(alert)

      challenge.css({position: 'absolute', top: '-1000px', left: '-1000px'})

      this.page.append(challenge);
    }
    $(document.body).append(this.page);
  }

  runChallengeCode(challengeNumber, code) {
    var aceEditor = this.challengeEditors[challengeNumber - 1].data('ace');
    aceEditor.setValue(code);
    this.challengeRunButtons[challengeNumber - 1].click()
  }

  challengeResult(challengeNumber) {
    return this.challengeAlerts[challengeNumber - 1].hasClass('alert-success')
  }

  destroy() {
    this.page.remove();
  }
}
