from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404, render
from .models import Question
from django.template import loader
from django.shortcuts import render 
def detail(request, question_id):
    # return HttpResponse(f"You re looking {question_id}")
    # questions = Question.objects.filter(id=question_id).all()
    # try: 
    #     questions = Question.objects.get(pk=question_id)
    # except Question.DoesNotExist:
    #     raise Http404("Question not found")
    questions = get_object_or_404(Question, pk=question_id)
    # if(not len(questions)):
    #     return HttpResponse("error not found")
    # else:
    #     questions = questions[0]
    
    
    # return HttpResponse(questions)
    return render(request, "polls/detail.html", context={"questions" : questions})
    


def index(request):
    questions = Question.objects.order_by('-pub_date').all()
    # res = ""
    # for q in questions:
    #     # print(q)
    #     res += q.__str__() + "</br>"
    
    # temp = loader.get_template("polls/index.html")
    # context = {
    #     "questions" : questions
    # }
    # # return HttpResponse(f'{12}')
    # return HttpResponse(temp.render(context, request))
    return render(request, "polls/index.html", context={"questions" : questions})
