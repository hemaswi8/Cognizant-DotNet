using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FirstWebApi.Filters
{
    public class CustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            string message = context.Exception.ToString();

            File.AppendAllText("ExceptionLog.txt",
                DateTime.Now + Environment.NewLine +
                message + Environment.NewLine +
                "----------------------------------------" + Environment.NewLine);

            context.Result = new ObjectResult("Internal Server Error")
            {
                StatusCode = 500
            };

            base.OnException(context);
        }
    }
}